const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");
const team = [];

// Write code to use inquirer to gather information about the development team members,
const addMembers = [
  {
    type: "list",
    message: "Would you like to add an employee to the team?",
    name: "addMore",
    choices: ["Yes", "No"],
  },
];

const questions = [
  {
    type: "list",
    message: "What type of employee would you like to add?",
    name: "role",
    choices: ["Engineer", "Intern"],
  },
];
async function internQuestions() {
  const teamIntern = await inquirer.prompt([
    {
      type: "input",
      message: "What is this Intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is their employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is this Intern's email address?:",
      name: "email",
    },
    {
      type: "input",
      name: "school",
      message: "What is their school?",
    },
  ]);
  console.log(teamIntern);
  const engineer = new Intern(
    teamEngineer.name,
    teamEngineer.id,
    teamEngineer.email,
    teamEngineer.school
  );
  team.push(engineer);
  init();
}

async function engineerQuestions() {
  const teamEngineer = await inquirer.prompt([
    {
      type: "input",
      message: "What is this Engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is their employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is this Engineers's email address?:",
      name: "email",
    },
    {
      type: "input",
      name: "github",
      message: "What is their GitHub address?",
    },
  ]);
  console.log(teamEngineer);
  const engineer = new Engineer(
    teamEngineer.name,
    teamEngineer.id,
    teamEngineer.email,
    teamEngineer.github
  );
  team.push(engineer);
  init();
}

// and to create objects for each team member (using the correct classes as blueprints!)
async function init() {
  // console.log("im working this far");
  const moreTeam = await inquirer.prompt(addMembers);
  if (moreTeam.addMore === "No") {
    console.log("We're done here");
    console.log(team);
    return team;
  }

  const answers = await inquirer.prompt(questions);
  console.log(answers);

  if (answers.role === "Engineer") {
    engineerQuestions();
    return "Engineer";
  } else {
    internQuestions();
    return "Intern";
  }
}

async function promptManager() {
  const teamManager = await inquirer.prompt([
    {
      type: "input",
      message: "What is the Managers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the Managers's email address?:",
      name: "email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
    },
  ]);
  console.log(teamManager);
  const manager = new Manager(
    teamManager.name,
    teamManager.id,
    teamManager.email,
    teamManager.officeNumber
  );
  team.push(manager);
  init();
}

promptManager();

// After the user has input all employees desired, call the `render` function (required
// writeFileSync("Develop/output/team.html", render(team));

// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work.

//     .then

//
