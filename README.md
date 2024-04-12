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
    - [ ] Users
    - [ ] UserById
    - [x] Posts
    - [ ] PostById
      - [ ] Сделать комменты
    - [ ] Auth
  - [ ] Поиск
    - [ ] Сортировка
    - [ ] Фильтр
    - [ ] По названию поста
    - [ ] По имени пользователя
  - [ ] Настройка redux
    - [ ] Slices
      - [ ] Users
      - [x] Posts
      - [ ] Subscribe
      - [ ] Comments
    - [ ] Получение данных с сервера
      - [ ] Users
      - [x] Posts
      - [ ] Subscribers
      - [ ] Comments
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
    - [ ] Строка поиска
  - [x] Поддржка css module для typescript
  - [ ] Footer открепить от окна, и прикрепить к низу страницы