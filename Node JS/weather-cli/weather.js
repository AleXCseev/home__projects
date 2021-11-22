#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError("Не передан токен");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess("Токен сохранен")
    } catch (e) {
        printError(e.message);
    }
    
}

const initCli = async () => {
    const args = getArgs(process.argv)

    if(args.h) {
        // help
        printHelp();
    }
    if(args.s) {
        // safe sity
    }
    if(args.t) {
        return saveToken(args.t);
        // safe token
    }
    console.log(await getWeather("London"));
    // return weather
}

initCli()