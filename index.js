

import express from 'express'
import Database from './src/database/database.js';
import { routes } from './src/route/route.js';
import cors  from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(cors())
const PORT = 4000 ;
app.use (bodyParser.json())
app.use(routes)
let db = new Database

app.listen( PORT, ()=>{
    console.log(`application a demarre sur http://127.0.0.1:` + PORT)

})

