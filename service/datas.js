import { db } from "../.config/database.js";
export const listData=(req,res)=>{
    db.all('select * from sorted',(err,row)=>{
        if(err){
            return res.send(err.message)
        }else{
            console.log(row);
            res.send(row);
        }
    })
}