function projectUrl(github, title) {
  const projectTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${projectTitle}`;
}

function generateMarkdown(data) {
  return `
# ${data.title}

*URL
${data.url}

##Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


##Installation

${data.installation}

##Usage

${data.usage}


##License

${data.license}

##Contribution

${data.contribution}

## Tests

${data.tests}

#Contact the Author

[${data.github}](${data.url}) directly at ${data.email}

`;
}

module.exports = generateMarkdown;
