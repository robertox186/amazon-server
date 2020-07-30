const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createUser= async (info)=>{
    console.log("info  =>"+JSON.stringify(info))
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);

    
var h=await  client.query(prop.insertUser,[info.name,info.email,info.password,info.type]);
console.log(h)
client.end(); 
return h;
     

}
module.exports.login= async (info)=>{
    console.log("info  =>"+info)
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);

    
var h=await  client.query(prop.login,[info]);
console.log(h)
client.end(); 
return h;
     

}