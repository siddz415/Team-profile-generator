const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const output_dir = path.resolve(__dirname, 'output')
const outputPath = path.join(output_dir, 'index.html');
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
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();
    })
};

const generateHtml = () => {
    const employeeCards = teamMembers.map(teamMember => {
        const roleData = {};
        const getIcon = () => {
            if (teamMember.getRole() === 'Manager') {
                roleData.label = 'Office Id'
                roleData.value = teamMember.officeNumber;
                return 'content_paste';
            } else if (teamMember.getRole() === 'Engineer') {
                roleData.label = 'Github Username'
                roleData.value = teamMember.github;
                return 'laptop_mac';
            } else {
                roleData.label = 'School'
                roleData.value = teamMember.school;
                return 'assignment_ind';
            }
        }
        return `<div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${teamMember.name}</h3>
                    <h4>${teamMember.getRole()}</h4><i class="material-icons">${getIcon()}</i>
                </div>
      
                <div class="card-body">
                    <p class="id">ID:${teamMember.id}</p>
                    <p class="email">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                    <p class="office">${roleData.label}: ${roleData.value}</p>
                </div>
      
            </div>
        </div>`
    })
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
           ${employeeCards.join('')}
        
             
    </div>
    </div>
    </main>
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
                promptEngineer();

                break;
            case 'Add an Intern':
                promptIntern();

                break;
            default:
                const html = generateHtml();
                fs.writeFile(outputPath, html, (err) => {
                    if (!err) {
                        console.log('success');

                    } else {
                        console.log(err);
                    }
                })

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
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github)
        teamMembers.push(engineer);
        promptMenu();
    })
};


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
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school)
        teamMembers.push(intern);
        promptMenu();
    })
};