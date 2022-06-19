// npm init -- to create package.json

const chalk = require('chalk');
var validator = require('validator');
 
console.log(chalk.green('success'));
const output = validator.isEmail('foo@bar.com');
console.log(output);// true