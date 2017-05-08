var chalk = require('chalk')
var clear = require('clear')
var CLI = require('clui')
var figlet = require('figlet')
var inquirer = require('inquirer')
var Preferences = require('preferences')
var Spinner = CLI.Spinner
var _ = require('lodash')
var touch = require('touch')
var fs = require('fs')
var shell = require('shelljs')

clear()
console.log(
  chalk.yellow(
    figlet.textSync('tak template', { horizontalLayout: 'full' })    
  )
)

const prompt = inquirer.createPromptModule()

var qa = [
    {
      type: 'list',
      name: 'file',
      message: 'What do you want install template?',
      choices: ['Heroku template (express)', 'Cancle']
    },
    {
      type: 'input',
      name: 'filename',
      message: 'What\'s your file name'
    }
]


prompt(qa).then((res) => {
    console.log(JSON.stringify(res, null, '  '))
    if (res.file === 'Heroku template (express)') {
        shell.echo('loading...... ')
        // shell.exec('touch' + res.filename)
        shell.touch(res.filename)
    }
})
