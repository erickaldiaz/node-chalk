//para llamar el modulo en node se usa asi
const chalk = require('chalk');
const log = console.log;
 
console.log(chalk.blue('Hello world!'));

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
