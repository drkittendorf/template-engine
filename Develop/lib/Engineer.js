// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(sideA, sideB) {
        const area = sideA * sideB;
        const perimeter = sideA * 2 + sideB * 2;

        super(area, perimeter);
        this.sideA = sideA;
        this.sideB = sideB;
    }
}

// In addition to`Employee`'s properties and methods, `Engineer` will also have:

//     * github  // GitHub username

//     * getGithub()

//     * getRole() // Overridden to return 'Engineer'