const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createProducto= async (info)=>{
    console.log("info  =>"+JSON.stringify(info))
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);

    
var h=await  client.query(prop.insertProducto,[info.name,info.descripcion,parseFloat(info.costo),parseInt(info.cantidad),info.estado,info.departamento,parseInt(info.id_users)  ]);
console.log(h)
client.end(); 
return h;
     

}
module.exports.select=async ()=>{
    
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);

    
var h=await  client.query(prop.selectProducto);
console.log(h.rows)
client.end(); 
return h;

}