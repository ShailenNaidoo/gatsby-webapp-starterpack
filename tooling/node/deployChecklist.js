const inquirer = require('inquirer');
const { includes } = require('lodash');
const { red } = require('colors');

console.log('asdasd');

// const choices = [
//   'Add/update unit tests',
//   'Add/update integration test',
//   'Add/update documentation',
//   'Add/update analytics',
//   'Check supported browsers on BrowserStack',
// ];

// inquirer
//   .prompt([
//     {
//       name: 'checklist',
//       type: 'checkbox',
//       message: 'Did you remember to do the following as required?',
//       choices,
//     },
//   ])
//   .then(({ checklist }) => {
//     choices.forEach((item) => {
//       if (!includes(checklist, item)) {
//         throw('Deployment aborted. you did not complete all pre-deploy checks!');
//       }

//       return null;
//     });
//   })
//   .catch((error) => {
//     console.log(red(error));
//     process.exit(1);
//   });
