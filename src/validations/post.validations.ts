import { body, oneOf } from "express-validator";

// Chain Method
const postDataValidate = [
  body('id')
    .optional() // Поля id может не быть
    .isInt().withMessage("id should be number")
    .custom(async (id) => {
      if (id <= 0) 
        throw new Error('id should be more then 0');
    }), 
  
  body('authorId')
    .exists().withMessage("authorId is required") // Если нету
    .isInt().withMessage("authorId should be number"), // Если не number
  
  oneOf([
    body('status')
      .exists()
      .isString().withMessage("status should be string")
      .equals('hide'),
    body('status')
      .exists()
      .isString().withMessage("status should be string")
      .equals('visable'),
  ], {
    message: "status should be equals \'hide\' or \'visable\'"
  }),
  
  body('filePath')
    .optional()
    .isEmpty().withMessage("please not using filePath"),
  
  body('likes')
    .optional()
    .isInt().withMessage("likes should be number"),
 
   body('text')
    .exists()
    .isString().withMessage("text should be string")
];

export {
  postDataValidate
};