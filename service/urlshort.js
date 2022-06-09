import {db} from '../.config/database.js';
export const shorted = (req,res)=>{
    let{name,website} = req.body;
    db.run(`insert into sorted values(?,?)`,name,website,(err)=>{
        if(err && err.errno == 19){ // check here wether error is data base error or need unique key
            return res.send({"message":"Cannot Insert Data sortedName already exist"})
        }else if(err){
            return res.send({"message":"Database error"});
        }else{
            return res.send(`{"message":"website added On database","sortedUrl":"/${name}"}`)

        }
    })
}