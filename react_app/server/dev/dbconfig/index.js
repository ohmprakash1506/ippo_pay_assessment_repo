"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
var url = process.env.MONGO_DB_URL;
var dbName = process.env.MONGO_DB_NAME;
var databaseURL = "".concat(url, "/").concat(dbName);
mongoose_1.default
    .connect(databaseURL)
    .then(function () {
    console.log("Database connection succussfull at : ".concat(databaseURL));
})
    .catch(function () {
    console.log("Error in database connection");
});
var db = mongoose_1.default.connection;
db.on("disconnected", function () {
    console.log("Database disconnected");
});
exports.default = db;
