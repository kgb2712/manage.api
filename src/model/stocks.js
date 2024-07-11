

import mongoose from "mongoose";

let StockSchema = new mongoose.Schema({
    nom :{type:'string', require:true },
    quantite :{type:'string', require:false },
})
const Stock = mongoose.model('stocks',StockSchema);
export default Stock;