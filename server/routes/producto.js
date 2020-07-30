const express = require('express');

var producto=require('../helpers/producto');

const app = express();
app.post('/', function (req, res) {
    let info=JSON.parse(req.body.params);
producto.createProducto(info).then(rest=>{
let resp=rest.rows;



res.send({status:200,body:resp})
}).catch(err=>{
    console.log(err)
    res.send({status:400,error:err})
})



});

module.exports=app;