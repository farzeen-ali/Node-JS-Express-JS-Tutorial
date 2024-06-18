const myFile = require('fs').writeFileSync;
console.log("Node JS Core Modules") //global core modules

// myFile.writeFileSync("coreModules.txt","Node Js Core Modules Tutorial") //non-global core modules

myFile("coreModules.txt","Node Js Core Modules Tutorial")