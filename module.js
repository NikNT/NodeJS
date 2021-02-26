/* 

NPM Modules 
const color = require('cli-color')
console.log(color.green('Hello NodeJS'))

-----------------------------------------

//Local Modules

const auth = require('./auth')

auth.register('Nikhil') 
auth.login('Tanwar', 'Secret')

-----------------------------------------

*/

//----------------------------Core Modules 

const path = require('path')

/* //dirname 
console.log('Folder Path: ', path.dirname(__filename))

-----------------------------------------

//Filename
console.log('File Name: ', path.basename(__filename))

-----------------------------------------

//File Extension
console.log('Extension Name: ', path.extname(__filename))

----------------------------------------

//Parse
console.log('Parse: ', path.parse(__filename))

----------------------------------------

//Join
console.log('Join : ', path.join(__dirname, 'order', 'app.js'))

--------------------------------------------------------------
*/ 

//---------------------------File System----------------------- 

const fs = require('fs')

//Make Directory 

/* fs.mkdir(path.join(__dirname, 'test'), (err) => {

    if(err){
        console.log ('Something Went Wrong!')
        return
    }

    console.log('Folder Successfully Created!')

}) */ 

//Create a File 

/* fs.writeFile(path.join(__dirname, 'test', 'text.txt'), 'Hello NodeJS\n', (err) => {

    if(err){
        throw err
    }

    fs.appendFile(path.join(__dirname, 'test', 'text.txt'), 'Appended Data', (err) => {

        if(err)
        {
            throw err
        }

        console.log('New Data Appended!')

    })

    console.log("File Created!")


})  

//Read File 

fs.readFile(path.join(__dirname, 'test', 'text.txt'), 'utf-8' ,(err, data) => {


    if(err){
        throw (err)
    }

    //const fileContent = Buffer.from(data)     
    //console.log("Data Read From File: ", fileContent.toString())

    //In case of UTF-8 

    console.log(data)

})

*/


/* Operating System (OS) Module 
const os = require('os')

//console.log('OS Type: ', os.type())  
//console.log('Platform Type: ', os.platform())
//console.log('CPU Arch: ', os.arch())
//console.log('CPU Details: ', os.cpus())
//console.log('Free Memory : ', os.freemem())
//console.log('Total Memory : ', os.totalmem())
//console.log('Uptime : ', os.uptime())

*/ 

//Events Module 

const Emitter = require('events')

const myEmitter = new Emitter()

/* myEmitter.on('EventI', (data) => {

    console.log (data)

})

myEmitter.emit('EventI', {

    name: 'Nikhil'

}) 

class Auth extends Emitter {

    register(username){

        console.log('Reg Succesffully!')
        this.emit('registered', username)
    }

}

const auth = new Auth()

//Listen to Event 


//Verify Email
auth.on('registered', (data) => {

    console.log(`Sending Email to ${data}`)
})

//Welcome Email
auth.on('registered', (data) => {

    console.log(`Sending Welcome Email to ${data}`)
})



auth.register('NikTan') 

*/ 
