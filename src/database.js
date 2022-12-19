
const {creatPool} =require('mysql')
const pool = creatPool({
  host: "localhost",
  user: "root",
  password: "AndreiSV123.",
  conectionimit: 10
})
pool.query("SELECT * FROM poriect_ip.login;",(eer,res)=>{
  return console.log(res)
})