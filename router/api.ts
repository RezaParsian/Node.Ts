import express from 'express';
import cors from 'cors';
import {success} from "../app/Helpers/functions";
import "../app/Controllers/Web/Idk"
export const api = express.Router();

api.use(cors());

api.get('/', (req: any, res) => {
    success(res, undefined, 'welcome to api.');
});