import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const idValidate = [
  body('id')
    .optional() // Поля id может не быть
    .isInt().withMessage("id should be number")
    .custom(async (id) => {
      if (id <= 0) 
        throw new Error('id should be more then 0');
    }),
];

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
