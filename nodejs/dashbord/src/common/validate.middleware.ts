import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middleware.inteface';

export class ValidateMiddleware implements IMiddleware {

    constructor(private classToValidate: ClassConstructor<object>) {}

    execute({ body }: Request, res: Response, next: NextFunction): void {
        const instanse = plainToClass(this.classToValidate, body);
        validate(instanse).then((errors) => {
            if(errors.length > 0) {
                res.status(422).send(errors);
            } else {
                next();
            }
        })
    }
}