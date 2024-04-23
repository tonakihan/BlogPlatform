# BlogPlatform Frontend

Это мой диплом.  

## Запуск
```bash
npm install
npm run build
cp build/* ./public # копирование в папку public на backend
```
После запустите backend

## Task list
- [ ] Frontend
  - [ ] Страницы
    - [x] About
    - [ ] Search
    - [ ] UserById
    - [x] Posts
    - [x] PostById
      - [x] Сделать комменты
    - [ ] Auth
  - [ ] Поиск
    - [ ] Сортировка
    - [ ] Фильтр
    - [ ] По названию поста
    - [ ] По имени пользователя
  - [ ] Настройка redux
    - [ ] Slices/Reducers
      - [ ] Users
      - [x] Posts
      - [ ] Subscribe
      - [x] Comments
    - [ ] Получение данных с сервера
      - [ ] Users
      - [x] Posts
      - [ ] Subscribers
      - [x] Comments
    - [ ] Отправление данных на сервер
      - [ ] User
      - [ ] Post
      - [ ] Subscribe
      - [ ] Comment
  - [ ] Настройка Router
  - [ ] Стили
    - [ ] Добавить полосу ограничивающая визуально контент
  - [ ] Создать NavBar
    - [x] Стили
    - [x] Навигация по страницам
    - [ ] Авторизация
  - [x] Поддржка css module для typescript
  - [ ] Footer открепить от окна, и прикрепить к низу страницы


  ## TODO
  - [ ] Сделать на redux запрос одного пользователя/поста.
  - [ ] Заменить стили на один огромный файл (конфликт стилей)
  - [x] Настроить стили content (ограничить ширину)