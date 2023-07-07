"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const logger_1 = __importDefault(require("./helpers/logger"));
const oauth2_1 = __importDefault(require("./services/oauth2"));
const googleapis_1 = require("googleapis");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/api/v1/link", (req, res) => {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ];
    const url = oauth2_1.default.generateAuthUrl({
        access_type: "offline",
        scope: scopes
    });
    return res.json(url);
});
app.post("/api/v1/token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { code } = body;
    const { tokens } = yield oauth2_1.default.getToken(code);
    oauth2_1.default.setCredentials(tokens);
    return res.end();
}));
app.get("/api/v1/me", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const people = googleapis_1.google.people("v1");
    googleapis_1.google.options({
        auth: oauth2_1.default
    });
    const me = yield people.people.get({
        resourceName: "people/me",
        personFields: "emailAddresses,names"
    });
    return res.json(me);
}));
app.listen(process.env.APP_PORT, () => {
    logger_1.default.info("Server running on port " + process.env.APP_PORT);
});
