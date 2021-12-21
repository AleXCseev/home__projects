"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const util_1 = require("./util");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((item) => {
            return [
                (0, util_1.dateStringToDate)(item[0]),
                item[1],
                item[2],
                parseInt(item[3]),
                parseInt(item[4]),
                item[5],
                item[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
