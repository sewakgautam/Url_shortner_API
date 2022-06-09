import { db } from "../.config/database.js";

export const deleteData = (req, res) => {
  let { name } = req.body;
  db.run(`delete from sorted where name=?`, name, (err) => {
    if(err){
      console.log(err)
  }
  else{
      console.log("Successful");
      res.send({"message":"Data Deleted","message2":"reload the page"})
  }


  });
};
