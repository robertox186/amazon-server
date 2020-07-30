const express = require('express');
const bcrypt = require('bcryptjs');
var user=require('../helpers/user');
const app = express();
app.post('/', function (req, res) {
    let info=JSON.parse(req.body.params);
    console.log("========>"+info)
   user.login(info.email).then(respt=>{
     let resp=respt.rows;
console.log('resp: =>'+JSON.stringify(resp))
     if(bcrypt.compareSync(info.password,resp[0].password)){
       res.json({status:200,body:resp[0]}).status(200);

     }else{
       res.json({status:400,message:"usuario u/o contrasena incorrectos"}).status(400);
     }

   }).catch(err=>{
console.log("error:"+err)
     res.send({status: 404,body:err});
   })
})




module.exports=app;