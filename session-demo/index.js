const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
}))


app.get('/', (req, res) => {
    res.send('Hello Session')
})

app.get('/greet', (req, res) => {
    const { username } = req.query;
    console.log(req.query);
    if (username) {
        req.session.username = username;
    }
    res.send(`Hello ${username}`)
});

app.get('/get-username', (req, res) => {
    const { username = 'Anonymous' } = req.session;
    res.send(`Your username is ${username}`)
})

app.get('/viewcount', (req, res) => {
    if (req.session.viewcount) {
        req.session.viewcount += 1;
    }
    else {
        req.session.viewcount = 1;
    }
    res.send(`You have viewed this page ${req.session.viewcount} times`)
})


app.listen(5000, () => {
    console.log('Express server started at port 5000');

})