const inquirer = require('inquirer');
const fs = require('fs');
// const { title } = require('process');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your projects title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Description of your project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'what are some of the usages in your project?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'what are this projects contribution guidelines?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'What are your test instructions?',
    },
    {
        type: 'list',
        message: 'What license was used for this project?',
        choices: [
            "Apache",
            "Boost",
            "BSD",
            "GNU",
            "Eclipse",
            "MIT",
            "Unlicensed"
        ],
        name: "License",
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'Repository',
        message: 'What is the name of your github repository',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    }
  ])
  .then((answers) => {
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('Dynamic-readME.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readMe!')
    );
  });

const generateMarkdown = ({Title, Description, TableofContents, Installation, Usage, License, Contributing, Tests, Github, Repository, Email}) =>
`
#${Title}

##Description
${Description}

##Installation
${Installation}

##Usage
${Usage}

##Contributing
${Contributing}

##Tests
${Tests}

##License
${License}

##Github
${Github}

##Repository
${Repository}

##Contact Me!
${Email}
`;