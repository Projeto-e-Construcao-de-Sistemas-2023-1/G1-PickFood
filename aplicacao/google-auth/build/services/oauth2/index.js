"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const oauth2client = new googleapis_1.google.auth.OAuth2(process.env.OAUTH2_CLIENT_ID, process.env.OAUTH2_CLIENT_SECRET, process.env.OAUTH2_REDIRECT_URL);
exports.default = oauth2client;
