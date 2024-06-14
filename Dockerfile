FROM node:lts-alpine3.19 as builder

WORKDIR /src
COPY . .
RUN apk update && \
    apk add git
# 1. build frontend
RUN git checkout frontend && \
    npm install && \
    npm run build
RUN rm -rf node_module
# 2. build backend
RUN git checkout backend-node && \
    npm install && \
    npm run build


FROM node:lts-alpine3.19
ENV DB_PASSWORD=docker \
    DB_NAME=blog_platform 
WORKDIR /usr/app
COPY --from=builder /src/build ./build
COPY --from=builder /src/static ./static
COPY --from=builder /src/package.json .
# TODO: Проверить наличие файла .env перед копированием
#COPY --from=builder /src/.env .
RUN npm install --production

EXPOSE 8080

CMD ["npm", "run", "start"]
