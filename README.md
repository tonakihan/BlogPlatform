# BlogPlatform Backend
Это мой диплом. 

## Установка 
Во первых скачайте репозиторий и переключите ветку.
```bash
git clone https://github.com/tonakihan/BlogPlatform
cd BlogPlatform
git checkout backend-node
```

### БД
Задайте свой пароль для базы данных
```bash
export DB_PASSWORD=replace_with_your_password
```
Далее есть 2 варианта поднятия базы данных:
#### Docker
```bash
cd data
docker build ./ --build-arg "POSTGRES_PASSWORD=$DB_PASSWORD" -t db-blog-platform
docker run -dp 127.0.0.1:5432:5432 db-blog-platform
cd ..
```
#### Нативный postgres
```bash
sudo -u postgres psql -c 'CREATE DATABASE blog_platform;'
sudo -u postgres psql blog_platform < ./data/blog_platform.sql
```

### Настройка backend
```bash
npm install
echo "DB_NAME=blog_platform" > .env
echo "DB_PASSWORD=$DB_PASSWORD" > .env
```

### Настройка frontend
Переключитесь на frontend и соберите его
```bash
git checkout frontend
```
После вернитесь в эту ветку
```
git checkout backend-node
```

### Запуск приложения
```bash
npm run start
```

## Task list
- [ ] Backend
  - [x] Сделать API
    - [x] Добавить express-validator и проверять поля
      - [x] user
      - [x] переделать все под общий вид (выбрать один метод)
      - [x] post
      - [x] comment
      - [x] subscribe
    - [x] user
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение
    - [x] post
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение
    - [x] comments
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение
    - [x] subscribe
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] GET count - Получение количества подписок
      - [x] GET - Получение списка подписок
  - [x] Настройка repository
    - [x] user
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение одного
      - [x] GET - Получение всех
    - [x] post
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение одного
      - [x] GET - Получение всех
    - [x] comments
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение одного
      - [x] GET - Получение всех
    - [x] subscribe
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] GET - Получение одного
      - [x] GET - Получение всех
      - [x] GET count - Получение кол-ва подписок
  - [x] Настроить парсинг frontend через express
    - [x] Взвесить за и проив, стоит ли подлючить corse?
  - [x] Настроить авторизацию
    - [x] Добавить поле pssword в БД
  - [ ] Docker

## Bugs
- [ ] Ошибка, когда отправляю get:/api/user с json'ом. (возможно особенность postman)
