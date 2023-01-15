// const {createPool} =require('mysql')

// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   database: "poriect",
//   password: "AndreiSV123.",
//   conectionimit: 10

// })
// pool.query('SELECT * FROM poriect_ip.login',(eer,res)=>{
//   return console.log(res)
// })

// const {createPool} = require('mysql');

//     const pool = createPool({
//         host: 'localhost',
//         user: 'root',
//         password: 'AndreiSV123.',
//         port: 3306,          //port mysql
//         database: 'ana.andrei',
//         multipleStatements: 'true'  //false by default

//     })
// pool.query('SELECT * FROM ana.andrei;',(eer,res)=>{
//   return console.log(res)
// })
const {createPool} = require("mysql2");

    const pool = createPool({
        host: "localhost",
        user: "root",
        password: "AndreiSV123.",
        port: 3306,          //port mysql
        database: "poriect_ip",
        multipleStatements: "true"  //false by default

    })
var a="Andrei32"
var b="1234567"
pool.query("SELECT * FROM poriect_ip.login where Nume='"+a+"' and codacces='"+b+"';",(eer,res)=>{
  if(eer){
      console.log(eer)
  }
  if(res)
  console.log(res);
  else
  return 1;
})

    