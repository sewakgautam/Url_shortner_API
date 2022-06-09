import { db } from "../.config/database.js";

export const site=(req,res)=>{
    const name = req.params.shorted
    db.get(`select * from sorted where name=?`,name,(err,row)=>{
        if(row){
            res.send(`{"Redirect":"${row.website}"}`)
        }else{
            res.status(404).send({"message":"Page not found","reditectTo":"/api/v1/short"})
        }
    })
}