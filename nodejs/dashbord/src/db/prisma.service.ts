import { PrismaClient, UserModel } from "@prisma/client";
import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";

@injectable()
export class PrismaService {
    client: PrismaClient;

    constructor(@inject(TYPES.ILogger) private logger: ILogger) {
        this.client = new PrismaClient();
    }

    async connect(): Promise<void> {
        try {
            await this.client.$connect();
            this.logger.log("[PrismaService] Connect db")
        } catch(e) {
            if(e instanceof Error) {
                this.logger.error("[PrismaService] connect fail: " + e.message);
            }
        }
        
    }

    async disconnect(): Promise<void>  {
        await this.client.$disconnect();
    }
}