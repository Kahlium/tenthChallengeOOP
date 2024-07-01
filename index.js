const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes.js');
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

const circle = new Square("text", "red", "blue")
console.log(circle)

inquirer
    .prompt(questions)

    .then(({ text, textColor, shape, shapeColor }) => {
        const fileName = "logo.svg"
        let logo = " "
        if (shape === "circle") {
            logo = new Circle(text, textColor, shape, shapeColor)
        } else if (shape === "triangle") {
            logo = new Triangle(text, textColor, shape, shapeColor)
        } else if (shape === "square") {
            logo = new Square(text, textColor, shape, shapeColor)
        }
        console.log(logo.createSVG())

        fs.writeFile(fileName, logo.createSVG(), (err) =>
            err ? console.log(err) : console.log('Success')
        )

    })
