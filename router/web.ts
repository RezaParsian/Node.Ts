import express from 'express';

export const web = express.Router();

web.get('/', (req: any, res: any) => {
    res.render('logs');
})

export function Get(route: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        web.get(route, descriptor.value);
    }
}