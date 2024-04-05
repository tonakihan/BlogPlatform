import { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from "express-validator";

const idValidate = [
  param('id')
    .optional() // Поля id может не быть
    .isInt().withMessage("id should be number")
    .custom(id => checkIdIsNotNegative(id)),
  body('id')
    .optional() // Поля id может не быть
    .isInt().withMessage("id should be number")
    .custom(id => checkIdIsNotNegative(id)),
];

async function checkIdIsNotNegative(id: number) {
  if (id <= 0) 
    throw new Error('id should be more then 0');
}

// middleware for chain method.
async function applyValidator(req: Request, res: Response, next: NextFunction) {
  console.log("Run applyValidator");

  try {
    let result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).send({ 
        errors: result.array() 
      });
      return;
    }
    next();
  } catch (err) {
    console.log(`Error in applyValidator: ${err}`);
  }
}

export { 
  applyValidator,
  idValidate
};
