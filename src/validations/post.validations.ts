import { body } from "express-validator";
import { idValidate } from ".";

const postDataValidate = [
  ...idValidate,
  
  body('authorId')
    .exists().withMessage("authorId is required") // Если нету
    .isInt().withMessage("authorId should be number"), // Если не number
  
  body('status')
    .exists().withMessage("status is required")
    .isString().withMessage("status should be string")
    .isIn(['hide', 'visable']).withMessage("status should be equals \"hide\" or \"visable\""),
      
  body('filePath')
    .optional()
    .isEmpty().withMessage("please not using filePath"),
  
  body('likes')
    .optional()
    .isInt().withMessage("likes should be number"),
 
   body('text')
    .exists().withMessage("text is required")
    .isString().withMessage("text should be string")
    .not().isInt().withMessage("text should be string")
];

export {
  postDataValidate
};