const {Prohairesis} = require('prohairesis');
//const env = require('./env');
export const connection = new Prohairesis(CLEARDB_DATABASE_URL);

//database.query("SELECT * FROM users;").then((res)=> {console.log(res);})
//.catch((e) => {
//    console.error(e);
//})
//.finally(()=>{database.close();})

