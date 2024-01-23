const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('We need a secret'));

const cart = [
    {
        name: 'Iphone 15',
        price: '$100'
    },
    {
        name: 'Macbook pro',
        price: '$200'
    }
]

app.get('/', (req, res) => {
    res.send('Hello Cookie')
})

app.get('/set-cookie', (req, res) => {
    // res.setHeader('set-cookie', "name=Apurva");
    res.cookie('name', 'Apurva', {
        // maxAge: 5000,
        // expires: new Date("27 January 2024"),
        // httpOnly: true,
        secure: true,
    })
    // res.cookie('mode', 'dark');
    res.send('Cookies has been set ');
})

app.get('/cart', (req, res) => {
    res.cookie('cart', JSON.stringify(cart));
    res.send('Setting cart in users cookies');
})

app.get('/fruit', (req, res) => {
    res.cookie('fruit', 'Mango', { signed: true });
    res.send('Sent you a cookie')
})

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('All cookies are sent')
})

app.get('/del-cookie', (req, res) => {
    res.clearCookie('mode')
    res.send('Cookie has been deleted')
})


app.listen(3000, (req, res) => {
    console.log('Express server started at port 3000');
})