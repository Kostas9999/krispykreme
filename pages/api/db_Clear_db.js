const {Prohairesis} = require('prohairesis');
const env = require('./env');
export const connection = new Prohairesis(env.CLEARDB_DATABASE_URL);

//connection.query("SELECT * FROM users;").then((res)=> {console.log(res);})
//.catch((e) => {console.error(e);})
//.finally(()=>{connection.close();})

