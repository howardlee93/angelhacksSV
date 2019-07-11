const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;
const upload = require('multer');


app.use(cors());
app.use(bodyParser.json());


// mongodb setup 


const mongoose = require('mongoose');

const DATABASEurl = 'mongodb://localhost:27017/persons';

mongoose.connect(DATABASEurl, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


//get routes 

const personRoutes = express.Router();
let Person = require("./models/personsInfo");

 

//need authentication 


personRoutes.route('/search').get(function(req, res) {
    let name = req.query.term.toLowerCase();

    Person.find({ person: `${name}` }, function(err, person) {
        res.json(person);
    });
});

//upload 

personRoutes.route('/upload').post(function(req, res) {
    let person = new Person(req.body);
    person.save()
        .then(person => {
            res.status(200).send('Data received:\n' + JSON.stringify(req.body));
        })
        .catch(err => {
            res.status(400).send('adding new info failed');
        });
});

app.use('/', personRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


