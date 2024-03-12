import { Request, Response, NextFunction } from "express";

function validateIdParams (req: Request, res: Response, next: NextFunction) {
  let id: string = req.params.id;
  let error = validateId(id);

  // Отправляем ошибки
  if (error.length > 0) {
    res.status(400).send({
      success: false,
      error
    });
    return;
  }
  
  // Если все норм, пропускаем дальще
  next();
}

function validateId (id: string): string[] {
  let error: string[] = [];
  
  if (!id) 
    error.push('id is required');
  else if (String(id).match(/[A-z]/g))
    error.push('id should be number');
  else if (parseInt(id, 10) <= 0)
    error.push('id should be more than 0');

  return error;
}

export { 
  validateIdParams, 
  validateId 
};
