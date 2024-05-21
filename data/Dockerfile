# Database BlogPlatform

FROM postgres

ARG POSTGRES_PASSWORD docker
ARG POSTGRES_DB blog_platform

COPY blog_platform.sql /docker-entrypoint-initdb.d/
