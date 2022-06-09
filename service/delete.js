import { db } from "../.config/database.js";

export const deleteData = (req, res) => {
  let { name } = req.body;
  db.get(`select * from sorted where name=?`, (err, row) => {
      let deleteData = row.name;
    db.run(`delete from sorted where name=?`, name, (err) => {
      console.log(err);
      if (err == null) {
        res.send({ Message: "no datas to be deleted" });
      } else {
        console.log("deleted");
        res.send(`{"message":"Deleted ${name} sorted url"}`);
      }
    });
  });
};
