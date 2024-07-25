let firstName = "Farzeen";
let lastName = "";

const setLastName = new Promise((resolve, reject) => {
    setTimeout(() => {
        // lastName = "Ali";
        resolve("Ali");
    }, 2000)
})

// setLastName.then((data) => {
//     lastName = data;
//     console.log(firstName + " " + lastName);
// })
// console.log("Hello")

//async await
const displayFullName = async () => {
    lastName = await setLastName;
    console.log(`${firstName} ${lastName}`)
}
displayFullName();
