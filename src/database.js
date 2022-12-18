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
const {createPool} = require("mysql");

    const pool = createPool({
        host: "localhost",
        user: "root",
        password: "AndreiSV123.",
        port: 3306,          //port mysql
        database: "ana.andrei",
        multipleStatements: "true"  //false by default

    })
pool.query("SELECT * FROM ana.andrei;",(eer,res)=>{
  return console.log(res)
})

    