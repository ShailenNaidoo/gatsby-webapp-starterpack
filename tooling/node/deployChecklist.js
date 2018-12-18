const inquirer = require('inquirer');
const { includes } = require('lodash');
const { red } = require('colors');

const choices = [
  'Add/update unit tests',
  'Add/update integration test',
  'Add/update documentation',
  'Add/update analytics',
  'Check supported browsers on BrowserStack',
];

inquirer
  .prompt([
    {
      name: 'checklist',
      type: 'checkbox',
      message: 'Did you remember to do the following as required?',
      choices,
    },
  ])
  .then(({ checklist }) => {
    choices.forEach((item) => {
      if (!includes(checklist, item)) {
        console.error('Deployment aborted. you did not complete all pre-deploy checks!');
        process.exit(1);
      }

      return null;
    });
  });
