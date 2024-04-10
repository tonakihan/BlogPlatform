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
    - [ ] userList
    - [x] postList
    - [ ] postItem
      - [ ] Сделать комменты
    - [ ] userItem
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
  - [ ] создать NavBar
    - [ ] стили
    - [ ] навигация по страницам
    - [ ] авторизация
    - [ ] строка поиска
  - [x] поддржка css module для typescript