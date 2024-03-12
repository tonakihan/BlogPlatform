import { Request, Response, NextFunction } from "express";
import { validateId } from "./common.validations";

function userDataValidate (req: Request, res: Response, next: NextFunction) {
  let error: string[] = [];
  
  // Поле id не обязательно в некоторых случаях
  if (req.body.id) 
    validateId(req.body.id)
      .forEach((eachError) => error.push(eachError));

  if (!req.body.firstName)
    error.push('firstName is reqired');
  
  if (!req.body.lastName) 
    error.push('lastName is required');
  
  if (!req.body.nickname)
    error.push('nickname is required');
  
  if (!req.body.email)
    error.push('email is required');
  else if (!req.body.email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
  ))
    error.push('provide valid email');
  
  // Отправляем ошибки
  if (error.length > 0) {
    console.log(`Result userDataValidate (errors): ${error}`);
    res.status(400).send({
      success: false,
      error
    });
    return;
  }
  
  console.log(`Result userDataValidate exit without errors`);
  next();
}

export {
  userDataValidate
};
