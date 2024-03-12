# BlogPlatform Backend
Это мой диплом. 

## Запуск 
```bash
git clone https://github.com/tonakihan/BlogPlatform
cd BlogPlatform
git checkout backend-node
sudo -u postgres psql -c 'CREATE DATABASE blog_platform;'
sudo -u postgres psql blog_platform < ./data/Source/db.sql
npm install
echo "DB_NAME=blog_platform" > .env
echo "DB_PASSWORD=Should_be_your_password_from_postgres" > .env
```
```bash
npm run start
```
Также был доступен bun, но от него отказался, т.к. есть баг с sequelize-typescript

---
/data/db.sql - это простой пример базы данных с которой будет работа. (будет позже)

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
  - [ ] Настроить парсинг frontend через express
    - [ ] Взвесить за и проив, стоит ли подлючить corse?
  - [ ] Настроить авторизацию

## Bugs
- [ ] Ошибка, когда отправляю get:/api/user с json'ом. (возможно особенность postman)