const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = {"test": {"password": "12345", "plants": []}};

app.post('/signup', (req, res) => {
    users[req.body.username] = {"password": req.body.password, "plants": []};

    console.log('Added new user!')
    console.log(req.body);
    res.status(200).send();
});

app.post('/login', (req, res) => {
    console.log(req.body);
    if(users[req.body.username]) {
        if(users[req.body.username].password === req.body.password) {
            console.log('User logged in!');
            console.log(users[req.body.username]);
            res.status(200).send();
        }
        else {
            console.log('Login failed! Incorrect password!');
            res.status(401).send();
        }
    }
    else {
        console.log('Login failed! Incorrect username and password!');
        res.status(401).send();
    }
});

app.get('/user', (req, res) => {
    res.json(users);
})

app.post('/user', (req, res) => {
    console.log(JSON.stringify(req.body));
    users[req.body.username].plants.push(req.body.new_plant);
    console.log(users);
})

app.listen(port, () => {
    console.log('Server running!');
});