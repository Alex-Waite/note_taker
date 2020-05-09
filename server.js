//imports express and stores it an the 'app' variable for easy use
const express = require('express');
const app = express();
const fs = require('fs');

// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);
const outputFile = __dirname + `/db/db.json`;

// get the npm path module to handle routes
const path = require('path');

// store the port in a variable
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




// routes app  ------------------------------------------------------

app.post('/api/notes', function (req, res) { 
    let noteArr = [];
    let noteInput = req.body;
    console.log('***********************************')
    console.log(noteInput)

    //add new note to noteArr[]
    noteArr.push(noteInput); //!!!!!!!!!!

    //stingify new object before writing to noteArr[]
    let note = JSON.stringify(noteArr);

    fs.writeFile(outputFile, note, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        } else {
            res.send(note);
            console.log("JSON file has been saved.");
        }

    });

});

app.get('/api/notes', function (req, res) {

    // reads noteArr = []
    fs.readFile(outputFile, function read(err, data) {
        if (err) {
            throw err;
        }
        console.log('++++++++++++++++++++++++++++++++++++++++')
        console.log(data)

        let parseNoteArr = JSON.parse(data);
        console.log(parseNoteArr)
        res.send(parseNoteArr);
    });

});



// routes html  -------------------------------------------------------

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


// listening code

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});




