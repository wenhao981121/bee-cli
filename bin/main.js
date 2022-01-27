#! /usr/bin/env node

const program = require('commander')
const create = require('./create')
const figlet = require('figlet')

figlet('b e e - c l i', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)



    program
        .version('0.1.0')
        .command('create <name>')
        .description('create a new project')
        .action((name) => {
            // 打印命令行输入的值
            console.log("project name is " + name)
            create(name)
            
        })
    program.parse()
});







