import {Logger} from "../../src/Logger";
import {now} from "../Helpers/functions";

export module ColorConsole {

    export function danger(msg: any) {
        console.log(`[${now().format('YYYY-MM-DD HH:mm:ss')}]: \x1b[31m%s\x1b[0m`, msg);

        Logger.setLog(`<p>[${now().format('YYYY-MM-DD HH:mm:ss')}]: <span class="text-danger">${msg}</span></p>`);
    }

    export function success(msg: any) {
        console.log(`[${now().format('YYYY-MM-DD HH:mm:ss')}]: \x1b[32m%s\x1b[0m`, msg);

        Logger.setLog(`<p>[${now().format('YYYY-MM-DD HH:mm:ss')}]: <span class="text-success">${msg}</span></p>`);
    }

    export function warning(msg: any) {
        console.log(`[${now().format('YYYY-MM-DD HH:mm:ss')}]: \x1b[33m%s\x1b[0m`, msg);

        Logger.setLog(`<p>[${now().format('YYYY-MM-DD HH:mm:ss')}]: <span class="text-warning">${msg}</span></p>`);
    }

    export function primary(msg: any) {
        console.log(`[${now().format('YYYY-MM-DD HH:mm:ss')}]: \x1b[34m%s\x1b[0m`, msg);

        Logger.setLog(`<p>[${now().format('YYYY-MM-DD HH:mm:ss')}]: <span class="text-primary">${msg}</span></p>`);
    }

    export function love(msg: any) {
        console.log(`[${now().format('YYYY-MM-DD HH:mm:ss')}]: \x1b[35m%s\x1b[0m`, msg);

        Logger.setLog(`<p>[${now().format('YYYY-MM-DD HH:mm:ss')}]: <span style="color: magenta">${msg}</span></p>`);
    }

    export function info(msg: any) {
        console.log(`[${now().format('YYYY-MM-DD HH:mm:ss')}]: \x1b[36m%s\x1b[0m`, msg);

        Logger.setLog(`<p>[${now().format('YYYY-MM-DD HH:mm:ss')}]: <span class="text-info">${msg}</span></p>`);
    }
}