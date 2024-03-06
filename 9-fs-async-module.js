// 1. useful for mulitple users -  as the user enters the code, it offloads it  and is ready for the next user 

const {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)  => {
        if (err){
            console.log(err);
            return
        }
        const second = result;

        writeFile('./content/result-async.txt', `result file content: ${first}, ${second}`, (err,result) => {
            if(err){
                console.log(err);
                return
            }
            console.log('Done with the task')
        })
    })
})

console.log('Staring new task');