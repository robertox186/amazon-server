module.exports={
con:"postgres://kbtuzcdhbvwzsl:5fa36d5582ccb95119a3e2cef7eb3150778e077cd3458a810e5ae4be2bd926be@ec2-52-22-216-69.compute-1.amazonaws.com:5432/dfiuop8du6n944",
  insertUser:"insert into users (name,email,password,type) values ($1,$2,$3,$4) returning *",
  login:"select * from users where email=$1",
  insertProducto:"insert into producto (name,descripcion,costo,cantidad,estado,departamento,id_users) values ($1,$2,$3,$4,$5,$6,$7)",
  selectProducto:"select * from producto",
  createPago:"insert into pago (banco,referencia,id_users,id_producto) values ($1,$2,$3,$4) returning *"


}