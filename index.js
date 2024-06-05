const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Write down your logo text',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Choose your text color (ex: white, black, red)',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose your shape',
        name: 'shape',
        choices: ["Square", "Triangle", "Circle"]
    },
    {
        type: 'input',
        message: 'Choose your shape color (ex: blue, yellow, red)',
        name: 'shapeColor'
    }
];

inquirer
    .prompt(questions)
    
    .then((response) => {

    })
