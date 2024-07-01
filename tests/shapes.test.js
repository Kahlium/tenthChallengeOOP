const { Circle, Triangle, Square } = require('../shapes.js');

describe('Circle', () => {
    test('Should make an svg file with text in the middle of a circle', () => {
        const shapeColor = "red"
        const text = "pik"
        const textColor = "black"

        const expectedHTML = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        const circle = new Circle(text, textColor, shapeColor);
        expect(circle.createSVG()).toEqual(expectedHTML);
    });
});

describe('Triangle', () => {
    test('Should make an svg file with text in the middle of a triangle', () => {
        const shapeColor = "red"
        const text = "pik"
        const textColor = "black"

        const expectedHTML = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 250,190 50,190" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        const triangle = new Triangle(text, textColor, shapeColor);
        expect(triangle.createSVG()).toEqual(expectedHTML);
    });
});

describe('Square', () => {
    test('Should make an svg file with text in the middle of a square', () => {
        const shapeColor = "red"
        const text = "pik"
        const textColor = "black"

        const expectedHTML = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="25" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        const square = new Square(text, textColor, shapeColor);
        console.log(square)
        expect(square.createSVG()).toEqual(expectedHTML);
    });
});