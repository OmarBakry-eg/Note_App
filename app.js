const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes");


//const msg = getNotes()

//console.log(chalk.bgBlue.bold(getNotes()));

yargs.version("1.1.0");

yargs.command({
    "command" : "add", // it dosen't matter if a remove a " " from a key or not 
    describe : "Add a note",
    builder:{
        "title" : {
            describe : "New title",
            "demandOption": true,
            type : "string"
           
        },
        body : {
            describe : "New desc",
            "demandOption": true,
            type : "string" 
        }
    },
    handler: function (argv){
    note.addNote(argv.title,argv.body)
    }
});

yargs.command({
    command : "remove", 
    describe : "remove a note",
    builder:{
        "title" : {
            describe : "New title",
            "demandOption": true,
            type : "string"
           
        },
    },
    "handler": function (argv){ 
        notes.removeNote(argv.describe)
    }
});

yargs.parse(); // print while just calling the command

//Run command => node app.js add --title="shopping" --body="New_DESC" 
//You could change title and descrbe in builder to anything you wanna name.
 // it dosen't matter if a remove a " " from a key or not 
