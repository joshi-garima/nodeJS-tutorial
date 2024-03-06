// 1. everything is synchronized- that means at a time only one user is able to use the functionality


// Destructing module fs

const {readFileSync, writeFileSync }  = require('fs')
// const fs = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second);
// writeFileSync('./content/result.txt',`result file content: ${first}, ${second}` )
// Here {flag:'a} represents append mode
writeFileSync('./content/result.txt',`Here result file content: ${first}, ${second}`, {flag : 'a'} )
console.log('done with the task')
const result = readFileSync('./content/result.txt', 'utf8')

console.log(result);
console.log('starting with a new task');