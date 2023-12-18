"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router/router"));
var dbconfig_1 = __importDefault(require("./dbconfig"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
var corsOption = {
    origin: "http://localhost:3000/",
};
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use((0, cors_1.default)(corsOption));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
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
