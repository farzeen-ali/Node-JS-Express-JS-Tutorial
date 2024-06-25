const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname, "CRUD");
const myPath = `${myCRUD}/crud.txt`;

//create
fs.writeFileSync(myPath,'Create Read Update Delete');

//read
// fs.readFile(myPath, 'utf8' ,(err, file) => {
//     console.log(file)
// })

//update
// fs.appendFile(myPath, " in Node JS", (err) => {
//     if(!err){
//         console.log("Your File is Updated Successfully!")
//     }
// })

//delete
// fs.unlinkSync(myPath);

//rename
fs.rename(myPath, `${myCRUD}/renameCRUD.txt`, (err) => {
    if(!err) {
        console.log("Your File is Renamed Successfully!")
    }
})
