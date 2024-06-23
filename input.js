// console.log(process.argv[2]);

const fs = require('fs');

const action = process.argv[2];
const fileName = process.argv[3];
const data = process.argv[4];

if (action == 'create') {
    fs.writeFileSync(fileName, data);
}
else if(action == 'delete'){
    fs.unlinkSync(fileName);
}
else {
    console.log("Invalid Action")
}