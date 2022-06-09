import {db} from '../.config/database.js';
export const validateName=(req,res,next)=>{
    let{name}=req.body;
    db.get(`select * from sorted where name=?`,name,(err,row)=>{
        if(row){
            if(row.name === name){
                next();
            }else{
                return res.send({"message":"Page Not Found"}).status(404)
            }
        }else{
            res.send({"message":"Problem With Database"})
        }
    })
}