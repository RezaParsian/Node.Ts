import express from 'express';
import {LogController} from "../app/Controllers/Web/LogController";

export const web = express.Router();

web.get('/', (req: any, res: any) => {
    res.send('<h1>Hello World from web.</h1>');
})

web.get('/logs',LogController.index);