/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import bodyparser from "body-parser";
import { Router } from "express";
import helmet from "helmet";
import { Connection } from "typeorm";
import { User } from "./accounts";
import { api404Handler, apiErrorHandler, InvalidQueryStringError } from "./error";

export default function api(db: Connection) {
    // Router
    const router = Router({
        caseSensitive: false,
        mergeParams: true,
        strict: false
    });

    // Body parsing
    router.use(bodyparser.json({
        inflate: true,
        limit: "1b",
        strict: true,
        type: "json"
    }));

    // Helmet
    router.use(helmet({
        noCache: true,
        xssFilter: true
    }));

    router.get("/test/newuser", async (req, res, next) => {
        if (!isNewUserQuery(req.query)) {
            next(new InvalidQueryStringError("The query did not have the needed values"));

            return;
        }

        let users = await db.getRepository(User);

        let existingUsers = await users.find({ username: req.query.username });

        if (existingUsers.length > 0) {
            next(new Error("A user already exists with that username"));

            return;
        }

        console.log(req.query);
        console.log(await users.save(new User(req.query.username, req.query.email)));
        res.json(await users.find());
    });

    router.get("/user/:user", async (req, res, next) => {
        let users = await db.getRepository(User);

        let existingUser = await users.findOne({ username: req.params.user });

        res.json(existingUser);
    });

    router.get("/users", async (req, res, next) => {
        let users = await db.getRepository(User);

        let existingUsers = await users.find();

        res.json(existingUsers.map(x => x.username));
    });

    // Error handlers
    router.use(apiErrorHandler);
    router.use("*", api404Handler);

    return router;
}

interface INewUserQuery extends Record<string, string> {
    username: string;
    email: string;
}

function isNewUserQuery(query: Record<string, string>): query is INewUserQuery {
    if (
        "username" in query && typeof query.username === "string"
        && "email" in query && typeof query.username === "string"
    ) return true;
    else return false;

}