import express, { Request, Response } from "express";
import logger from "./helpers/logger";
import cors from "cors"
import mailer from "./services/mailers"

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/v1/emails/send", async (req: Request, res: Response) => {

    logger.info("Sending email...");

    const { body } = req;
    const { to, subject, text } = body;

    const msg = {
        to,
        from: "joaovitorsouzacoura@gmail.com",
        subject,
        text
    };

    logger.info(msg);

    try {
        await mailer.send(msg);
    } catch (err: any) {

        logger.error(err);
        
        if (err?.response) {
            logger.error(err.response.body);
        }

        return res.status(500).json(err);
    }

    logger.info("Email sent");

    return res.end();
});

app.listen(process.env.APP_PORT, () => {
    logger.info("Server running on port " + process.env.APP_PORT);
});