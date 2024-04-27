import { body } from "express-validator";
import { idValidate } from ".";

const commentDataValidate = [
  ...idValidate,
  
  body('authorId')
    .exists().withMessage("authorId is required")
    .isInt().withMessage("authorId should be number"),

  body('text')
    .exists().withMessage("text is required")
    .isString().withMessage("text should be string")
    .not().isInt().withMessage("text should be string"),

  body('postId')
    .exists().withMessage("post is required")
    .isInt().withMessage("postId should be number"),

  body('likes')
    .optional()
    .isInt().withMessage("likes should be number")
];

export {
  commentDataValidate
};
