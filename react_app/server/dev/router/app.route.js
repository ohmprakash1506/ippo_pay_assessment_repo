"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app_controller_1 = __importDefault(require("../controllers/app.controller"));
var router = (0, express_1.Router)();
var app = new app_controller_1.default();
router.get("/response", app.console);
exports.default = router;
