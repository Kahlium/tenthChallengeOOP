const Logo = require('./logo.js');

class Circle extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, "circle", shapeColor);
    }

    createSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Triangle extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, "triangle", shapeColor);
    }

    createSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 250,190 50,190" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Square extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, "square", shapeColor);
    }

    createSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="25" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;