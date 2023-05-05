import {Request, Response} from "express";
import {Logger} from "../../../src/Logger";

export module LogController {
    export async function index(req: Request, res: Response) {
        res.render('logs', {
            title:' Last 100 Logs',
            logs: Logger.getLogs()
        })
    }
}