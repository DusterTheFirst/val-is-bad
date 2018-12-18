/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import bodyparser from "body-parser";
import { Router } from "express";
import { api404Handler, apiErrorHandler } from "./errorHandler";

// Router
const api = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: false
});

// Body parsing
api.use(bodyparser.json({
    inflate: true,
    limit: "1b",
    strict: true,
    type: "json"
}));

// Error handlers
api.use(apiErrorHandler);
api.use("*", api404Handler);

export default api;