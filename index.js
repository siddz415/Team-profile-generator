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
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title></title>
    </head>
    
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
           ${teamMembers.map(teamMember => {
            return `<div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${teamMember.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
      
                <div class="card-body">
                    <p class="id">ID: 12345</p>
                    <p class="email">Email: <a href="mailto:johnsmith@yahoo.com">johnsmith@yahoo.com</a></p>
                    <p class="office">Office Number: 12</p>
                </div>
      
            </div>
        </div>`
           })}         
      
      
      <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h3>Siddharth</h3>
                  <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
              </div>
    
              <div class="card-body">
                  <p class="id">ID: 54321</p>
                  <p class="email">Email: <a href="mailto:siddz415@gmail.com">siddz415@gmail.com</a></p>
                  <p class="github">Github: <a href="https://github.com/siddz415">siddz415</a></p>
              </div>
    
          </div>
      </div>
      
      <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h3>Jason</h3>
                  <h4>Intern</h4><i class="material-icons">assignment_ind</i>
              </div>
    
              <div class="card-body">
                  <p class="id">ID: 19888</p>
                  <p class="email">Email:<a href="mailto:jack@aol.com">jasonc@yahoo.com</a></p>
                  <p class="school">School: UCD</p>
              </div>
      </div>
    </div>
    
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
                promptEngineer();
                console.log('add engineer');
                break;
            case 'Add an Intern':
                promptIntern();
                console.log('add Intern');
                break;
            default:
                generateHtml();
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