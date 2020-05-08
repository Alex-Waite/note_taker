//imports express and stores it an the 'app' variable for easy use
const express = require('express');
const app = express();
const fs = require('fs');

// get the npm path module to handle routes
const path = require('path');

// store the port in a variable
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// routes app  -------------------------------------------------------


// let jsonInput = res.body;
// let newJsonNote = JSON.parse(jsonInput);


app.post('/api/notes', function(req , res) { // data from front end being caught by app.get???
    let noteInput = req.body;
    let writeNote = JSON.stringify(noteInput);
    // check the types of data
    console.log(noteInput)
    console.log(typeof noteInput) // input is an object
    console.log(writeNote)
    console.log(typeof writeNote) // input is now a string
});


app.get('/api/notes', function(req , res) { 
    res.send(req.body);
    console.log(req.body)
});

// routes html  -------------------------------------------------------

app.get('/notes', function(req , res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', function(req , res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


// listening code

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });




