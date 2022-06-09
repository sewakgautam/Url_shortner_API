import { db } from "./database.js";
export const createTable = ()=>{
    const querry=`Create table if not exists sorted(name varchar(6) unique,website varchar(255));`;
    db.run(querry,(err)=>{
        console.log("Database Created")
    })
}
