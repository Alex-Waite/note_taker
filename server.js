//imports express and stores it an the 'app' variable for easy use
const express = require('express');
const app = express();

// get the npm path module to handle routes
const path = require('path');

// store the port in a variable
const PORT = 3000;

// console.log(__dirname)

// routes  -------------------------------------------------------

app.get('/notes', function(req , res) {
    res.sendfile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', function(req , res) {
    res.sendfile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/notes', function(req , res) {
    res.sendfile(path.join(__dirname, '/db/db.json'));
});

app.post('/api/notes', function(req , res) {
    res.sendfile(path.join(__dirname, '/db/db.json'));
});









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });




