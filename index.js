const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const questions = [
  {
    message: "What is the title of your project?",
    name: "title",
    type: "input",
    default: "Title",
  },
  {
    message: "What is the URL to your project?",
    name: "url",
    type: "input",
    default: "URL to project - ",
  },
  {
    message: "Write a description of your project.",
    name: "description",
    type: "input",
    default: "Description - ",
  },
  {
    message: "Describe the installation procedure for any dependencies.",
    name: "installation",
    type: "input",
    default: "Installation process - ",
  },
  {
    message: "Provide instructions for the usage.",
    name: "usage",
    type: "input",
    default: "Usage instructions - ",
  },
  {
    message: "Choose your license.",
    name: "license",
    type: "list",
    choices: ["MIT", "EPL", "Apache", "GPL 3.0", "BSD 3", "None"],
  },
  {
    message: "Write a step by step procedure for making contributions.",
    name: "contribution",
    type: "input",
    default: "How to contribute - ",
  },
  {
    message: "Provide examples of tests and how to run them.",
    name: "tests",
    type: "input",
    default: "Example tests - ",
  },
  {
    message: "What is your email address?",
    name: "email",
    type: "input",
    default: "Email - ",
  },
  {
    message: "What is your GitHub username?",
    name: "githubName",
    type: "input",
    default: "GitHub username - ",
  },
];

// function promptQuestions() {
//   return inquirer.prompt(questions);
// }

// promptQuestions();

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
