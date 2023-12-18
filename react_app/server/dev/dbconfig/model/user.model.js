"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    emailID: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    dateOfbirth: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
}, {
    timestamps: false,
});
var user = (0, mongoose_1.model)("user", userSchema);
exports.default = user;
