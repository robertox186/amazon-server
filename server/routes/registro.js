const express = require('express');
const bcrypt = require('bcryptjs');
const app = express.Router();
const user=require('../helpers/user');


app.post('/', function (req, res) {

    let info=JSON.parse(req.body.params);
    console.log(info);
    
    info.password=bcrypt.hashSync(info.password,10);
    console.log(info.password)
    user.createUser(info).then(resp=>{
        console.log("llegue:"+resp)
     let respt=resp.rows[0];

     res.send({status:200,body:respt});
      

    }).catch(err=>{
console.log("error "+err)
      res.send({status:408,body:err});
    })


});


app.get('/',function(req,res){
    console.log("hola")
    res.sendStatus(250);
    
    })



module.exports=app;