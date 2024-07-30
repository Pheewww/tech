// import express from "express";
// import {performance} from "perf_hooks"
// const app = express();

// // middleware for body parser
// app.use(express.json());

// // middleware to inc counter on no of calls 
// function increaseCounter(req, res, next){
//     if(req.name == "umang") next();
//     else return err;
// }

// // Avg time server takes to handle requests 
// // 2 middleware needed - one at start and one at end
// function serverTime(req, res, next){

//     const t1 = 0;
//     const t2 = 0;
//     if(!req){
//         t1= performance.now();
//     }
//     if(res.on("finish", ()=>{
//         t2 = performance.now();
//     }))
//     if(res.on("close", ()=>{
//         t2 = performance.now();
//     }))

//     console.log("avg time", t1 - t2);


//     next();

// }

// // simple api
// app.get('/test-api',serverTime,  increaseCounter,  function (req, res){
 
//     const name = req.query.name;
//     if(name){
//         res.json({
//             msg: "Yo",
//         });    
//     }
//     else{
//         res.json({
//             msg: "Yo error",
//         })
//     }
    
// });



// // global catch - 4 input arg, gets raise for exception on any route
// app.use((err, req, res, next)=>{

//     console.log(err.stack);
//     //STATUS + JSON
//     res.status(500).json({
//         msg: "YO, in the global catches block"
//     })
// })

// app.listen(3000)


const express = require("express");
const zod = require("zod");


const app = express();
app.use(express.json());

// for value between IN and US - country
// for array of name -> [string1, string2] 
// email + pwd(min 6 length)

function validateInput(obj){
const schema  = zod.object({
    country: zod.literal("IN").or(zod.literal("US")),
    names: zod.array(zod.string()),
    email: zod.string().email(),
    pwd: zod.string().min(6),

})

const response = schema.safeParse(obj);
console.log(response);
}

app.post('/test-api', function (req, res){
    const check =  req.query.names;
    //names = [happy, umang]

    const response = validateInput(check);
    if(!response.success){
       res.send({
        response,
    })
    return;

}
})


// JWT -> jwt.sign(username, pwd) + jwt.decode()
//     -> jwt.verify(token, jwt_secret)

app.listen(3000);