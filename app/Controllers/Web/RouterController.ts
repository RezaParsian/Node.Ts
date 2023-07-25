import {Request, Response} from "express";
import {Get} from "../../../router/web";

export class RouterController {
    @Get('/rp76')
    Rp76(req: Request, res: Response) {
        res.send('<h1>Done With Decorator!</h1>');
    }
}