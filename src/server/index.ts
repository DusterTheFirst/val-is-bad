/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import express from "express";
import helmet from "helmet";
import http from "http";
import nextjs from "next";
import { join } from "path";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { parse } from "url";
import { User } from "./accounts";
import api from "./api";
import { pagesErrorHandler } from "./error";

const port = process.env.PORT || 5982;
const dev = process.env.NODE_ENV !== "production";
const app = nextjs({
    conf: {
        poweredByHeader: false
    },
    dev,
    dir: join(__dirname, "../client"),
    quiet: true
});
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    let db = await createConnection({
        database: "db/users.sqlite",
        entities: [
            User
        ],
        logger: "debug",
        logging: true,
        synchronize: true,
        type: "sqlite"
    });

    const server = express();

    // Protection
    server.use(helmet());

    // server.get("/", (req, res) => {
    //     res.contentType("html");

    //     app.render(req, res, "/index");
    // });
    // server.get("/u/:user", async (req, res) => {
    //     let users = db.getRepository(User);

    //     let user = await users.findOne(req.params.user);

    //     if (user === undefined) {
    //         app.render(req, res, "/user404", { user: req.params.user });
    //     } else {
    //         app.render(req, res, "/user", { user: user.username });
    //     }
    // });

    // API
    server.use("/api", api(db));
    // Static Files
    server.use("/static", express.static("static"));

    // NextJS Files
    server.use("/_next/*", (req, res) => handle(req, res, parse(req.originalUrl)));

    // Error Handlers
    // @ts-ignore
    server.use("*", (req, res) => app.render(req, res, "/404", { path: parse(req.originalUrl).pathname, e: console.log(parse(req.originalUrl)) }));
    server.use(pagesErrorHandler);

    // Spin up server
    http.createServer(server).listen(port);
}).catch((e) => console.log("ERROR: ", e));