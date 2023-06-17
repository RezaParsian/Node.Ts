import express, {Response} from "express";

export const custom = express.Router();

class Route {
    @Get("/rp")
    lol(request: Request, response: Response, next:any) {
        response.send('reza');
    }
}


function Get(route: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor, route);

        custom.get(route, descriptor.value);
    }
}