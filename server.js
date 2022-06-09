import express from "express";
const app = express();
import { config } from "dotenv";
import {route as apiShortner} from "./routes/api.routes.js";
import {createTable} from "./.config/createTable.js";
import {site as sortedUrlFetch} from './service/originalsite.js';
import {listData} from './service/datas.js';
import {deleteData} from './service/delete.js'
config();
createTable();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use('/api/v1',apiShortner);
app.post('/:shorted',sortedUrlFetch)
app.get("/admin",listData)
app.post('/delete/data',deleteData) // has bug on it need to fixdeerhold



app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`)
})