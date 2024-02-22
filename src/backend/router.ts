/* TODO: 
 * [ ] _limit
 * [ ] Возвращаемое кол-во (max) есть в таблице
 * [ ] Посты по пользователю
 * [ ] _page
*/

import { Router } from "express";

const router = Router();

router.get('/posts', (req, res) => {
  /* Получить все посты */
  res.send("all posts");
  console.log(req.query);
});
router.get('/users', (req, res) => {
  /* Получить всех пользователей */
  res.send("all users");
});
router.get('/post/:id', (req, res) => {
  /* Получить один пост по ID */
  res.send("one post");
});
router.get('/user/:id', (req, res) => {
  /* Получить одного пользователя по ID */
  res.send("one user");
});

export default router;
