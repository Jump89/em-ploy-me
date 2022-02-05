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

promptManager();