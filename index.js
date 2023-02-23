const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const output_dir = path.resolve(__dirname, 'output')
const outputPath = path.join(output_dir, 'profile.html');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager name',
            validate: nameInput => {
                if (nameInput) {
                    return true;

                } else {
                    console.log('Enter your name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter Manager ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;

                } else {
                    console.log('Enter your Manager ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Manager email',
            validate: email => {
                if (email) {
                    return true;

                } else {
                    console.log('Enter Manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Manager office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;

                } else {
                    console.log('Enter Manager office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();
    })
};

const generateHtml = () => {
    return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title></title>
    </head>
    <body>
        <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
    </body>
    </html>`
}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'What do you want to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish'],

        }
    ]).then(answers => {
        switch (answers.name) {
            case 'Add an Engineer':
                console.log('add engineer');
                break;
            case 'Add an Intern':
                console.log('add Intern');
                break;
            default:
                console.log('Finish');
        }
    })
}
promptManager();

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name',
            validate: nameInput => {
                if (nameInput) {
                    return true;

                } else {
                    console.log('Enter engineer name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter engineer ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;

                } else {
                    console.log('Enter your engineer ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email',
            validate: email => {
                if (email) {
                    return true;

                } else {
                    console.log('Enter engineer email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer github username',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;

                } else {
                    console.log('Enter engineer github username!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github)
        teamMembers.push(engineer);
        promptMenu();
    })
};
promptEngineer();

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Intern name',
            validate: nameInput => {
                if (nameInput) {
                    return true;

                } else {
                    console.log('Enter your name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter Intern ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;

                } else {
                    console.log('Enter your Intern ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Intern email',
            validate: email => {
                if (email) {
                    return true;

                } else {
                    console.log('Enter Intern email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter Intern school',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;

                } else {
                    console.log('Enter Intern school!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school)
        teamMembers.push(intern);
        promptMenu();
    })
};
promptIntern();