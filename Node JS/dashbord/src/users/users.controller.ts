import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {

    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            {path: 'register', method: 'post', func: this.register}
        ])
    }

    login() {

    }

    register() {

    }

}