const fs  = require("fs");
const readline = require("readline");
const crypto = require("crypto");
const path = require("path");

const readlineinterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
console.log("Enter your detail to Signup ")
readlineinterface.question("enter your Username :",(Username)=>{
    readlineinterface.question("enter your Age :",(age)=>{
        readlineinterface.question("enter your Password :",(Password)=>{
            const hashPassword = crypto.createHash("sha256").update(Password).digest("hex");
            const filePath = path.join(__dirname, "logindetail.txt")
            fs.writeFile(filePath , `Your Username is :${Username},\nage is: ${age},  \nPassword is :${hashPassword} `,(error)=>{
             if(error)
               return console.log(error);

                 console.log("profile created successfully")

                readlineinterface.question("\n Please Enter Your Password to Login :", (Password) => {
                    const hashPassword  = crypto.createHash("sha256").update(Password).digest("hex");

                    fs.readFile("./logindetail.txt", "utf-8", (err, data) => {
                        if (err) {
                        console.error(err);
                        }
                                        const lines = data.split("\n");
                                        const storedPasswordLine = lines[2]; 
                                        const storedHash = storedPasswordLine.split(":")[1].trim(); 

                        if (hashPassword  == storedHash) {
                        console.log("Login Successfully !");
                          readlineinterface.close();
                        }
                        else {
                           console.log("☹ Password is incorrect.......!")
                              
                             
                                readlineinterface.question("\n Please Enter Your correct Password to Login :", (Password) => {
                                  const hashPassword = crypto.createHash("sha256").update(Password).digest("hex");
                                      
                                    fs.readFile("./logindetail.txt", "utf-8", (err, data) => {
                                       if (err) {
                                        console.error(err);
                                        }
                                          const lines = data.split("\n");
                                       const storedPasswordLine = lines[2]; 
                                        const storedHash = storedPasswordLine.split(":")[1].trim(); 

                                      

                                        if (hashPassword == storedHash) {
                                        console.log("Login  Successfully !");
                                           readlineinterface.close();
                                        } 
                                    }) 
                               
                                
                                })
                             
                            }

                    })
              
                })
           
             })
        

      
        
        })
    })
})