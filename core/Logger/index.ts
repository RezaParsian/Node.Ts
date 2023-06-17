import * as fs from 'fs';
import path from "path";
import {Environment} from "../../app/Providers/Environment";
import {ColorConsole} from "../../app/Utilities/Console";

let logPath: string;
let logFile: string;

logPath = Environment.PWD + "/storage/logs";
logFile = new Date().toLocaleDateString('en-ZA').replace(/\//g, '-');

if (!fs.existsSync(logPath))
    fs.mkdirSync(logPath);

let logs: string[] = [];

export module Logger {
    export function filePath(filename: string = logFile) {
        return path.join(logPath, filename) + ".log";
    }

    export function checkFile(): void {
        if (!fs.existsSync(filePath()))
            fs.writeFileSync(filePath(), '');
    }

    export function getCurrentTime(): string {
        const date: Date = new Date();
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
    }

    export function info(message: string, data?: object, filename: string = logFile) {
        checkFile();

        fs.appendFileSync(filePath(filename), `[${getCurrentTime()}] INFO: ${message} ` + (data! ? JSON.stringify(data!) : '') + "\n");

        ColorConsole.info(`${message} ` + (data! ? JSON.stringify(data!) : ''));
    }

    export function error(message: string, data?: object, filename: string = logFile) {
        checkFile();

        fs.appendFileSync(filePath(filename), `[${getCurrentTime()}] ERROR: ${message} ` + (data! ? JSON.stringify(data!) : '') + "\n");

        ColorConsole.danger(`${message} ` + (data! ? JSON.stringify(data!) : ''));
    }

    export function alert(message: string, data?: object, filename: string = logFile) {
        checkFile();

        fs.appendFileSync(filePath(filename), `[${getCurrentTime()}] ALERT: ${message} ` + (data! ? JSON.stringify(data!) : '') + "\n");

        ColorConsole.warning(`${message} ` + (data! ? JSON.stringify(data!) : ''));
    }

    export function setLog(log: string) {
        if (logs.length > 100)
            logs.shift();

        logs.push(log);
    }

    export function getLogs(): string[] {
        return logs;
    }
}