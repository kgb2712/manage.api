

import mongoose from "mongoose";

let CategorieSchema = new mongoose.Schema({
    libelle :{type:'string', require:true },
    createdAt: {
        type: Date,
        default: Date.now
   }
})
const Categorie = mongoose.model('categories',CategorieSchema);
export default Categorie;