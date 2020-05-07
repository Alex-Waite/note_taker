//imports express and stores it an the 'app' variable for easy use
const express = require('express');
const app = express();

// get the npm path module to handle routes
const path = require('path');

// store the port in a variable
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// console.log(notesList);
// console.log(indexJS);

// routes app  -------------------------------------------------------

app.get('/api/notes', function(req , res) {
    res.send(path.join(__dirname, '/db/db.json'));
});

app.post('/api/notes', function(req , res) {
    res.send(path.join(__dirname, '/db/db.json'));  //not sendFile
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




