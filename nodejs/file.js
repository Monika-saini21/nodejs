
const fs  = require("fs")
// console.log(fs)

//MkdirSync
// try {
//     fs.mkdirSync("src")
//     console.log("folder created")
// } catch (error) {
//     console.log(error)
// }


// fs.rmdir("src",(error)=>{
//     if(error)
//         return console.log(error);
//     console.log("file removed")
// })


//CURD

//readfilesunc -blocking
// const result = fs.readFileSync("fruits.txt","utf-8" )
// console.log(result);

//readfile  -async   -non blocking
// console.log("start");
//  fs.readFile("fruits.txt","utf-8",(error,data)=>{
//     if(error) return console.log(error);
//         console.log(data)
//     });
// console.log("end");    

// sync write
// try {
//     fs.writeFileSync("index.txt","hello monika ");
//     console.log("file create succesfully")
// } catch (error) {
//     console.log(error)
// }

// Async write
// console.log("start");
//  fs.writeFile("index.txt","hello everyone how are you",(error)=>{
//     if(error) return console.log(error);
//         console.log("file create succesfully")
//     });
// console.log("end");  

// append/update sync
// try {
    
//  fs.appendFileSync("index.txt" ,"\n what is today plane")
//   console.log("file updated succesfully")
// } catch (error) {
//     console.log(error)
// }

// append/update Async
// fs.appendFile("fruits.txt","\nmango",(error)=>{
//     if (error)
//         return console.log(error);
//     console.log("file updated succesfully")
// })

// delete sync
// try {
//     fs.unlinkSync("index.txt")
//     console.log("file deleted")
// } catch (error) {
//     console.log(error)
// }

//delete async
// fs.unlink("fruits.txt",(error)=>{
//     if(error)
//         return console.log(error);
//       console.log("file deleted")
// })

