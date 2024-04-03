# Quality-Map-Challenge

## Installing and Initializing a Cypress Project

### Before starting, ensure that you have the following installed on your system:

- Node.js (including npm)

### Open your terminal and run the following command to install npm in the project directory::

- Copy code:
  `npm install`
- Install npm

### Open your terminal and run the following command to install Cypress in the project directory:
- Copy code:
  `npm install cypress --save-dev`
- Initialize Cypress in Your Project

## The Gherkin scenarios are in the Feature directory within the Register.feature file

![image](https://github.com/JamellyZ/Quality-Map-Challenge/assets/48723621/c1cf1c34-2d9a-45cb-933f-fec2eabd92fd)

## Create a `cypress.env.json` file at the root of the project and include the following data:
`{
    "api_server": "http://localhost:3000"
}`

## Navigate to your project directory in the terminal and run:

  `npx cypress open`
