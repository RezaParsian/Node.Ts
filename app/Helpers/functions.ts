import {Response} from "express";
import moment from "jalali-moment";

export function success(res: Response, data?: object, message: string = 'request executed successfully.', status: number = 200): void {
    res.status(status);

    res.send({
        status: true,
        message,
        data
    });
}

export function danger(res: Response, data?: object, message: string = 'something bad happened.', status: number = 500): void {
    res.status(status);

    res.send({
        status: false,
        message,
        data
    });
}

export async function asyncForEach(array: any[], fn: (item: any, index: number) => any) {
    const startTime = process.hrtime();

    for (const [index, item] of Object.entries(array))
        await fn(item, Number(index));

    const endTime = process.hrtime(startTime);

    return `${array.length} process finished in ${endTime[0]}s`;
}

export function isValidJSON(json: string) {
    try {
        const obj = JSON.parse(json);
        return obj && typeof obj === 'object';
    } catch (e) {
        return false;
    }
}

export function fromTimestamp(timestamp: number): moment.Moment {
    return moment.unix(timestamp).utcOffset("+03:30");
}

export function now(): moment.Moment {
    return moment().utcOffset("+03:30");
}
