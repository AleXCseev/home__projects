#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"

const initCli = () => {
    const args = getArgs(process.argv)

    console.log(args);
    if(args.h) {
        // help
    }
    if(args.s) {
        // safe sity
    }
    if(args.t) {
        // safe token
    }
    // return weather
}

initCli()