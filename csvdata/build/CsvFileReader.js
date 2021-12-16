"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("./util");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split("\n")
            .map((item) => {
            return item.split(",");
        })
            .map((item) => {
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
exports.CsvFileReader = CsvFileReader;
