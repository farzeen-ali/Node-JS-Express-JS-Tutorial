// builtin event listeners
// const fs = require('fs');

// const myRead = fs.createReadStream('./input.txt');

// myRead.on('open', () => {
//     console.log("Input.txt is opened")
// })

// customize event listener

const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on('play', (type) => {
    console.log(`I'm Playing ${type}`)
})

eventEmitter.emit('play', "football")
