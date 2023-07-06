import { google } from "googleapis";


const oauth2client = new google.auth.OAuth2(
    process.env.OAUTH2_CLIENT_ID,
    process.env.OAUTH2_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URL
);



export default oauth2client;