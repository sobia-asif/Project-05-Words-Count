#! /usr/bin/env node

//import the 'inquirer ' module, wich is a command line interface for Node,js
import inquirer from "inquirer";

//declear a constant 'answer' and assign it to the inquirer .prompt funcation

const answers: {
    sentence : string 
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
])

const words = answers.sentence.trim().split("")

//print the arry of the words to the console
console.log(words)

//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);