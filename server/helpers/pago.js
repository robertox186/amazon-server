const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createPago= async (info)=>{
    console.log("info  =>"+JSON.stringify(info))
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);

    
var h=await  client.query(prop.createPago,[info.banco,info.referencia,parseInt(info.id_users),info.id_producto]);
console.log(h)
client.end(); 
return h;
     

}