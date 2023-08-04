const express = require('express');
const app = express();
const cors = require('cors');
const sendMail = require('./mail');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api', (req, res) => {
    res.send('Greetings!');
    console.log('greet', req.body)
})

app.get('/api/mail', async (req, res) => {
    console.log('Mail Sent !!!', req.body)
    const isSend = await sendMail({
        from: 'harinivanmeeganathan@gmail.com',
        to: 'harinivanmeeganathan@gmail.com',
        subject: 'Name',
        text: 'message'

    })

    console.log(isSend)
    if (isSend) {
        res.status(200).json({
            status: 'Success',
            message: 'Mail Sent !!!'
        })
    } else {
        res.status(400).json({
            status: 'Failed',
            message: 'Unable to Send Mail !'
        })
    }
})

app.use(express.static('Client/build'));
if (process.env.NODE_ENV === 'production') {
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './Client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server started @', port);
})