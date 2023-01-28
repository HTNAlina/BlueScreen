const {createPool} = require("mysql2");

    const pool = createPool({
        host: "localhost",
        user: "root",
        password: "21991288",
        port: 3306,          //port mysql
        database: "poriect_ip",
        multipleStatements: "true"  //false by default

    })

pool.query("SELECT * FROM poriect_ip.login;",(eer,res)=>{
  if(eer){
      console.log(eer)
  }
  if(res)
  console.log(res);
  else
  return 1;
})
pool.query("SELECT * FROM poriect_ip.lot;",(eer,res)=>{
  if(eer){
      console.log(eer)
  }
  if(res)
  console.log(res);
  else
  return 1;
})
