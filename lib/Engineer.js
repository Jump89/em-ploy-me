const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); //supercalls the parent constructor copys from employee so i dont have to write this. over again Shorthand
        this.github = github;
    }
    getGitHub() {
        return this.github 
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;