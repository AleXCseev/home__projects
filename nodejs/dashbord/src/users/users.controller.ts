import { ValidateMiddleware } from './../common/validate.middleware';
import { UserService } from './users.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { IUserController } from './users.interface';
import { TYPES } from './../types';
import { HTTPError } from './../errors/http-error.class';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
				@inject(TYPES.ILogger) private loggerService: ILogger,
				@inject(TYPES.UserService) private userService: UserService
			) {
		super(loggerService);

		this.bindRoutes([
			{ 
				path: '/register', 
				method: 'post', 
				func: this.register, 
				middlewares: [new ValidateMiddleware(UserRegisterDto)] 
			},
			{ 
				path: '/login', 
				method: 'post', 
				func: this.login,
				middlewares: [new ValidateMiddleware(UserLoginDto)] 
			},
		]);
	}

	async login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.userService.validateUser(req.body);
		if(!result) {
			return next(new HTTPError(401, 'ошибка авторизации', 'login'));
		}
		this.ok(res, {});
	}

	async register({ body }: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.userService.createUser(body);
		if(!result) {
			return next(new HTTPError(422, "Такой пользователь уже существует"))
		}
		this.ok(res, result);
	}
}
