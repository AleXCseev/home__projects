#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const initCli = () => {
    const args = getArgs(process.argv)

    if(args.h) {
        // help
        printHelp();
    }
    if(args.s) {
        // safe sity
    }
    if(args.t) {
        saveKeyValue("token", args.t);
        // safe token
    }
    // return weather
}

initCli()