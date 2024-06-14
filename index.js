const inquirer = require('inquirer');
const Logo = require('./logo.js');
const fs = require("fs")

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
        choices: ["square", "triangle", "circle"]
    },
    {
        type: 'input',
        message: 'Choose your shape color (ex: blue, yellow, red)',
        name: 'shapeColor'
    }
];

inquirer
    .prompt(questions)
    
    .then(({ text, textColor, shape, shapeColor }) => {
        const fileName = "logo.svg"
        const logo = new Logo(text, textColor, shape, shapeColor);
        console.log(logo.createSVG())

        fs.writeFile(fileName, logo.createSVG(), (err) => 
                err ? console.log(err) : console.log('Success')
        )
        
    })
