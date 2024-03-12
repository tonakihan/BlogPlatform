import { body } from "express-validator";
import { idValidate } from ".";

const subscribeDataValidate = [
  ...idValidate,
  
  body('userTargetId')
    .exists().withMessage("userTargetId is required")
    .isInt().withMessage("userTargetId should be number"),
  
  body('userObjectId')
    .exists().withMessage("userObjectId is required")
    .isInt().withMessage("userObjectId should be number")
];

export {
  subscribeDataValidate
};