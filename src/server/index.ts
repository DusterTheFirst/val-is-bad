/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import express from "express";
import { readFileSync } from "fs";
import helmet from "helmet";
import http from "http";
import https from "https";
import next from "next";
import { join, resolve } from "path";
import { parse } from "url";
import api from "./api";
import { pagesErrorHandler } from "./errorHandler";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: join(__dirname, "../client") });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Protection
    server.use(helmet());

    server.get("/", (req, res) => {
        res.contentType("html");
        res.setHeader("Cache-Control", "max-age=600");

        console.log(req.headers);

        app.render(req, res, "/index");
    });
    server.get("/u/:user", (req, res) => {
        res.send(`So nice of you to stop by and check out ${req.params.user}`);
    });

    // API
    server.use("/api", api);

    // Error Handlers
    // server.use("*", (req, res) => app.render(req, res, "/404"));
    server.use("*", (req, res) => handle(req, res, parse(req.originalUrl)));
    server.use(pagesErrorHandler);

    // Spin up servers
    // Actual webserver
    https.createServer({
        cert: readFileSync(resolve("cert/cert.crt")),
        key: readFileSync(resolve("cert/key.crt"))
    }, server).listen(443);
    // Redirect from 80 to 443
    http.createServer((_req, res) => {
        res.writeHead(302, { Location: "https://dusterthefirst.ddns.net" });
        res.end();
    }).listen(80);
}).catch(console.error);