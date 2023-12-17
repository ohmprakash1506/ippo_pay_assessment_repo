"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router/router"));
var dbconfig_1 = __importDefault(require("./dbconfig"));
require("dotenv/config");
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use(express_1.default.json());
dbconfig_1.default.once("open", function () {
    try {
        console.log("Database connected");
    }
    catch (error) {
        console.log("Something went wrong ... !");
    }
});
app.listen(port, function () {
    try {
        console.log("Application is running at Port : ".concat(port));
    }
    catch (error) {
        console.log("Something went wrong.....!");
    }
});
app.use("/v1/api", router_1.default);
