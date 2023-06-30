const express = require("express");
const logger = require("./helpers/logger.js");
const cors = require("cors");
const mailer = require("./services/mailers.js");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/v1/emails/send", async (req, res) => {

    const { body } = req;
    const { to, subject, text } = body;

    const msg = {
        to,
        from: "joaovitorsouzacoura@gmail.com",
        subject,
        text
    };

    mailer.send(msg);

    return res.end();
});

app.listen(process.env.APP_PORT, (err) => {
    if (err) {
        logger.error(err);
        return;
    }

    logger.info("Server running on port " + process.env.APP_PORT);
})