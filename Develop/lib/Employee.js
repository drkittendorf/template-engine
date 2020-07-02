// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }
        if (!role) {
            throw new Error("You are missing the role.");
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    printStats() {
        console.log(`Info for ${this.name} is as following:`);
        console.log(`ID: ${this.id}`);
        console.log(`${this.name} can be reached at: ${this.email}`);
        console.log("------------");
    }

}


Employee.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nID: " + this.id +
        "\nEmail: " + this.email + "\nRole: " + this.role + "\n");
    console.log("\n-------------\n");
};

// creates two unique characters using the "character" constructor
// var warrior = new Employee("Jim", "2", "jim@jamail.com", "worker");
// var rogue = new Employee("Pam", "3", "pam@jamail.com", "worker");


//   * name
//     * id
//     * email
//     * getName()
//     * getId()
//     * getEmail()
//     * getRole() // Returns 'Employee'
//     * 
//     * 
    //  class Character {
    //       constructor(name, strength, hitPoints) {
    //           if (!name) {
    //               throw new Error("You are missing the name.");
    //           }
    //           if (!strength) {
    //               throw new Error("You are missing the strength.");
    //           }
    //           if (!hitPoints) {
    //               throw new Error("You are missing the hitPoints.");
    //           }
    //           this.name = name;
    //           this.strength = strength;
    //           this.hitPoints = hitPoints;

    //       }

        // printStats() {
        //     console.log(`Stats for ${this.name} are as following:`);
        //     console.log(`Each attack will do ${this.strength} damage.`);
        //     console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
        //     console.log("------------");
        // }