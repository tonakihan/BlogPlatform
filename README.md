# BlogPlatform Backend

Это мой диплом. 
## Запуск 
```bash
git clone https://github.com/tonakihan/BlogPlatform
cd BlogPlatform
git checkout backend
sudo -u postgres psql blog_platform < ./data/Source/db.sql
bun install
echo "DB_NAME=blog_platform" > .env
echo "DB_PASSWORD=Should_be_your_password_from_postgres" > .env
```
```bash
bun start
```

---
/data/db.sql - это простой пример базы данных с которой будет работа. (будет позже)

## Task list
- [ ] Backend
  - [ ] Сделать API
    - [ ] Добавить express-validator и проверять поля
    - [x] user
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение
    - [ ] post
      - [ ] DEL - Удаление 
      - [ ] POST - Добавление
      - [ ] PUT - Обновление записей
      - [ ] GET - Получение
    - [ ] comments
      - [ ] DEL - Удаление 
      - [ ] POST - Добавление
      - [ ] PUT - Обновление записей
      - [ ] GET - Получение
    - [ ] subscribe
      - [ ] DEL - Удаление 
      - [ ] POST - Добавление
      - [ ] PUT - Обновление записей
      - [ ] GET - Получение
  - [ ] Настройка repository
    - [x] user
      - [x] DEL - Удаление 
      - [x] POST - Добавление
      - [x] PUT - Обновление записей
      - [x] GET - Получение одного
      - [x] GET - Получение всех
    - [ ] post
      - [ ] DEL - Удаление 
      - [ ] POST - Добавление
      - [ ] PUT - Обновление записей
      - [ ] GET - Получение одного
      - [ ] GET - Получение всех
    - [ ] comments
      - [ ] DEL - Удаление 
      - [ ] POST - Добавление
      - [ ] PUT - Обновление записей
      - [ ] GET - Получение одного
      - [ ] GET - Получение всех
    - [ ] subscribe
      - [ ] DEL - Удаление 
      - [ ] POST - Добавление
      - [ ] PUT - Обновление записей
      - [ ] GET - Получение одного
      - [ ] GET - Получение всех
  - [ ] Настроить парсинг frontend через express
    - [ ] Взвесить за и проив, стоит ли подлючить corse?
  - [ ] Настроить авторизацию

## Bugs
- [ ] Ошибка, когда отправляю get:/api/user с json'ом.