/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import { NextFunction, Request, Response } from "express";

export function apiErrorHandler(error: Error | string, req: Request, res: Response, next: NextFunction) {
    res.json({ error: 500, message: "Internal Server Error", actualError: error});
}
export function api404Handler(req: Request, res: Response, next: NextFunction) {
    res.json({ error: 404, message: "Path does not exist"});
}

export function pagesErrorHandler(error: Error | string, req: Request, res: Response, next: NextFunction) {
    res.send(`500: Internal Server Error\n${error}`);
}