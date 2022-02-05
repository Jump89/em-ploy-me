const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { prompt } = require('inquirer');
let team = [];
let id = 0;
// increment ID
function generateId() {
    // increase id by 1
    return ++id;
}


function promptManager() {
     return inquirer.prompt([
         {
             type:'input',
             message: "What is your team Manager's name?",
             name: "managerName",
             validate: (answer) => {
                 if (answer.length < 1) {
                    return console.log("A valid name is required.")
                 }
                 return true
             }
         },
         {
            type: 'input',
            message: "Please enter a valid email.",
            name: "managerEmail",
            validate: (answer) => {
                if (answer.length < 1) {
                   return console.log("A valid Manager email is required.")
                }
                return true
            }
         },
        {
            type: 'input',
            message: "What is your office number?",
            name:'officeNumber',
            validate: (answer) => {
                if (answer.length < 1) {
                   return console.log("A valid name is required.")
                }
                return true
            }
        }
     ]).then(answers => {
         const manager = new Manager(answers.managerName, generateId(), answers.managerEmail, answers.officeNumber);
         team.push(manager);
     })
}

function newEmployee() {
    return inquirer.prompt([
        // Confirm if we would like to add a new employee
        {
            type: 'confirm',
            name: 'newEmployee',
            message: "Would you like to add a new Employee?",
            default: true
        },
        // If newEmployee is true, ask for Employee's Name
        {
            type: 'input',
            name: 'employeeName',
            message: "Please enter the employee's name: (Required)",
            when: confirmEmployee => confirmEmployee.newEmployee === true,
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        // If newEmployee is true, ask for Employee's Email
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please enter the employee's Email: (Required)",
            when: confirmEmployee => confirmEmployee.newEmployee === true,
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter a Email!");
                    return false;
                }
            }
        },
        // If newEmployee is true, ask for Employee's Role
        {
            type: 'list',
            name: 'employeeRole',
            message: "Select employee's role: (Required)",
            when: confirmEmployee => confirmEmployee.newEmployee === true,
            choices: ['Engineer', 'Intern']
        },
        // If employeeRole is Engineer, ask for github username
        {
            type: 'input',
            name: 'github',
            message: "Enter github username: (Required)",
            when: role => role.employeeRole === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter a github username!");
                    return false;
                }
            }
        },
        // if employeeRole is Intern, ask for school Name
        {
            type: 'input',
            name: 'school',
            message: "Enter school name: (Required)",
            when: role => role.employeeRole === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter a School Name!");
                    return false;
                }
            }
        }
    ])
}

promptManager().then(newEmployee);