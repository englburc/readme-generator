// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.license}
  # ${data.title}

  ## Description 
  ${data.description}

    ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [User guid](#user guid)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
    ## Installation
    ${data.installation}

    ## User guid
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    In case of any enquiries contact me at ${data.email}`;
}

module.exports = generateMarkdown;
