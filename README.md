# BlogPlatform Backend
## Установка
### Docker compose
Вернитесь в ветку main и следуйте инструкции из README.md

### Ручной способ
Во первых скачайте репозиторий и переключите ветку.
```bash
git clone https://github.com/tonakihan/BlogPlatform
cd BlogPlatform
git checkout backend-node
```

#### БД
Задайте свой пароль для базы данных
```bash
export DB_PASSWORD=replace_with_your_password
```
Далее есть 2 варианта поднятия базы данных:
##### Docker
```bash
cd data
docker build ./ --build-arg "POSTGRES_PASSWORD=$DB_PASSWORD" -t db-blog-platform
docker run -dp 127.0.0.1:5432:5432 db-blog-platform
cd ..
```
##### Нативный postgres
```bash
sudo -u postgres psql -c 'CREATE DATABASE blog_platform;'
sudo -u postgres psql blog_platform < ./data/blog_platform.sql
```

#### Настройка и сборка backend
```bash
npm install
echo "DB_NAME=blog_platform" > .env
echo "DB_PASSWORD=$DB_PASSWORD" > .env
npm run build
```

#### Настройка и сборка frontend
Переключитесь на frontend и соберите его
```bash
git checkout frontend
```
После вернитесь в эту ветку
```
git checkout backend-node
```

#### Запуск приложения
```bash
npm run start
```

## Bugs
- [ ] Ошибка, когда отправляю get:/api/user с json'ом. (возможно особенность postman)
