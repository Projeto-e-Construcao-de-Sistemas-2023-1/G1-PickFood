import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import logger from "./helpers/logger";
import oauth2client from "./services/oauth2";
import { google } from "googleapis";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1/link", (req: Request, res: Response) => {
    const scopes: any = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ];

    const url = oauth2client.generateAuthUrl({
        access_type: "offline",
        scope: scopes
    })
    return res.json(url);
});

app.post("/api/v1/token", async (req: Request, res: Response) => {
    const { body } = req;

    const { code } = body;

    const { tokens } = await oauth2client.getToken(code);
    oauth2client.setCredentials(tokens);

    return res.end();
});

app.get("/api/v1/me", async (req: Request, res: Response) => {

    const people = google.people("v1");

    google.options({
        auth: oauth2client
    });

    const me = await people.people.get({
        resourceName: "people/me",
        personFields: "emailAddresses,names"
    });

    return res.json(me);

});




app.listen(process.env.APP_PORT, () => {

    logger.info("Server running on port " + process.env.APP_PORT);
})