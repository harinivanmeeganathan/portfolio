const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (values) => {

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'harinivanmeeganathan@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }

        });

        const options = {
            from: 'harinivanmeeganathan@gmail.com',
            to: 'harinivanmeeganathan@gmail.com',
            subject: `${values.subject}`,
            text: `${values.text} 
            email : ${values.to}`
        };
        let res = await transportMail(transporter, options);
        return res;

    } catch (e) {
        return e;
    }

}

const transportMail = (transporter, options) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(options, function (err, info) {
            console.log(info);
            if (err) {
                console.log(err);
                resolve(false);
            } else {
                resolve(true);
            }
        })
    })
}

module.exports = sendMail;