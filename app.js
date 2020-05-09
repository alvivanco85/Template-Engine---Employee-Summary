const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​

function appMenu() {

function userPrompts() {
  return inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Employee Type: ",
        choices: ["Manager", "Engineer", "Intern"]
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id number?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github username? ",
        when: function(answers) {
          const value = answers.employeeType == "Engineer" ? true : false;
          return value;
          }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your offic number? ",
        when: function(answers) {
          const value = answers.employeeType == "Manager" ? true : false;
          return value;
          }
      },
      {
        type: "input",
        name: "school",
        message: "Which school do you attend? ",
        when: function(answers) {
          const value = answers.employeeType == "Intern" ? true : false;
          return value;
          }
      }
  ]);
}

function buildTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(answers), "utf-8");
}

userPrompts();

}
​
appMenu();
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
