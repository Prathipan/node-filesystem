const express = require('express');
const fs = require('fs')

const app = express();
app.use(express.json());


app.get('/' , (req,res) => {

    const day = new Date();
    let filename = `${day.getDate()}-${(day.getMonth() + 1)}-${day.getFullYear()}-${day.getHours()}.${day.getMinutes()}`;
    console.log(filename);

    let timestamp = Math.floor(new Date().getTime() / 1000).toString();
    console.log(timestamp);

   //Create a new file in particular folder
    fs.writeFile(`./directory/${filename}.txt`, timestamp, (err) => {
        if (err) {
         console.log(err);
        }
        console.log("The file was saved!");
    });

    //retreive all text files in particular folder
    fs.readdir('./directory', (err,files) => {
        if(err) {
            console.log("unable to scan directory" + err);
        }
        files.forEach((file) => {
            console.log(file); 
        });
    })

    res.send("get request called");


})



const port = 4000;
app.listen(port , () => {
    console.log(`App is running in port ${port}`);
})