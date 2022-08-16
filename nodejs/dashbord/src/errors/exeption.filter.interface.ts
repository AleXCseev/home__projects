import { HTTPError } from './http-error.class';
import { NextFunction, Request, Response } from 'express';

export interface IExeptionFilter {
	catch: (err: Error | HTTPError, req: Request, res: Response, next: NextFunction) => void;
}
