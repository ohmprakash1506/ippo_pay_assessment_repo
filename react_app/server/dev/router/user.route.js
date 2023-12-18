"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var user = new user_controller_1.default();
var route = (0, express_1.Router)();
route.get("/all", user.all);
route.post("/create", user.create);
route.put("/update/:id", user.update);
route.delete("/delete/:id", user.delete);
route.delete("/delete", user.deleteAll);
exports.default = route;
