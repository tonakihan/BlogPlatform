import { idValidate } from ".";
import { body } from "express-validator";

const userDataValidate = [
  ...idValidate,

  body('firstName')
    .exists().withMessage("firstName is reqired")
    .isString().withMessage("firstName should be string")
    .not().isInt().withMessage("firstName should be string")
    .isLength({max: 45}).withMessage("length should be not more 45"),

  body('lastName')
    .exists().withMessage("lastName is reqired")
    .isString().withMessage("lastName should be string")
    .not().isInt().withMessage("lastName should be string")
    .isLength({max: 100}).withMessage("length should be not more 100"),

  body('nickname')
    .exists().withMessage("nickname is reqired")
    .isString().withMessage("nickname should be string")
    .not().isInt().withMessage("nickname should be string")
    .isLength({max: 45}).withMessage("length should be not more 45"),
  
  body('email')
    .exists().withMessage("email is reqired")
    .isEmail().withMessage("provide valid email")
    .isLength({max: 200}).withMessage("length should be not more 200"),
  
  body('role')
    .optional()
    .isIn(["user", "admin", "bunned"]).withMessage("not correct role")
    .isLength({max: 100}).withMessage("length should be not more 100")
];

export {
  userDataValidate
};
