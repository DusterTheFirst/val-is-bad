/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import { NextFunction, Request, Response } from "express";

export function apiErrorHandler(error: Error | string, req: Request, res: Response, next: NextFunction) {
    res.json({ code: 500, message: "Internal Server Error", error: error.toString()});
}
export function api404Handler(req: Request, res: Response, next: NextFunction) {
    res.json({ code: 404, message: "Path does not exist"});
}

export function pagesErrorHandler(error: Error | string, req: Request, res: Response, next: NextFunction) {
    res.send(`500: Internal Server Error\n${error}`);
}

export class InvalidQueryStringError extends Error {
    public name: "InvalidQueryStringError";

    constructor(message: string) {
        super(message);

        this.name = "InvalidQueryStringError";
    }
}