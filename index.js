const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "Project title?",
        name: 'title',
        required: true,
        default: 'Title'
      },
      {
        type: 'input',
        message: "Provide short description of the project:",
        name: 'description',
        required: true,
        default: 'Description'
      },
      {
        type: 'input',
        message: "Project installation:",
        name: 'installation',
        required: true,
        default: 'Installation'
      },
      {
        type: 'input',
        message: "Provide the user guid:",
        name: 'usage',
        required: true,
        default: 'User guid'
      },
      {
        type: 'input',
        message: "List the contributors of the project:",
        name: 'contributing',
        required: true,
        default: 'Contributing'
      },
      {
        type: 'input',
        message: "Any tests perphormed with the project:",
        name: 'tests',
        required: true,
        default: 'Tests'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a type of license form the list below:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        required: true,
        default: 'MIT License'
      }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err =>¨{
        if(err){
            return console.log(err)
        }
        //if no error
        console.log(fileName + `written successfully!`)

    });
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
