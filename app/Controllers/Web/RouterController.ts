import {Request, Response} from "express";
import {All, Get, Post} from "../../../core/Router";

export class RouterController {
    @All('/rp*6')
    Rp76(req: Request, res: Response) {
        res.send('<h1>Done With Decorator!</h1>');
    }
}