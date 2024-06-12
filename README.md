# BlogPlatform Frontend

Это мой диплом.  

## Запуск
```bash
npm install
npm run build
```
После запустите backend

## Task list
- [ ] Frontend
  - [ ] Страницы
    - [x] About
    - [ ] Search
    - [ ] UserById
    - [x] Posts
      - [x] Создание своего поста
    - [x] PostById
      - [x] Сделать комменты
      - [x] Создания своего коммента
    - [x] Auth
  - [ ] Поиск
    - [ ] Сортировка
    - [ ] Фильтр
    - [ ] По названию поста
    - [ ] По имени пользователя
  - [ ] Настройка redux
    - [ ] Slices/Reducers
      - [x] Users
      - [x] Posts
      - [ ] Subscribe
      - [x] Comments
    - [ ] Получение данных с сервера
      - [x] Users
      - [x] Posts
      - [ ] Subscribers
      - [x] Comments
    - [ ] Отправление данных на сервер
      - [x] User
      - [x] Post
      - [ ] Subscribe
      - [x] Comment
  - [x] Настройка Router
  - [x] Создать NavBar
    - [x] Стили
    - [x] Навигация по страницам
    - [x] Авторизация
  - [x] Поддржка css module для typescript
  - [ ] Footer открепить от окна, и прикрепить к низу страницы
  - [ ] Добавить margin 100px снизу в posts;

  ## TODO
  - [ ] Сделать на redux запрос одного пользователя/поста.
  - [ ] Заменить стили на один огромный файл (конфликт стилей)
  - [x] Настроить стили content (ограничить ширину)

  ## Bugs
  createApi page Posts - при отсутсвии сервера вываливается в ошибку.