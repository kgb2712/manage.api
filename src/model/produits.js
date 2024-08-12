

import mongoose from "mongoose";

let ProduitSchema = new mongoose.Schema({
    nom :{type:'string', require:true },
    prix :{type:'string', require:true },
    quantite :{type:'string', require:true },
    description :{type:'string', require:true },
    photo :{type:'string', require:true },
    createdAt: {
        type: Date,
        default: Date.now
        }
    
})
const Produit = mongoose.model('produits',ProduitSchema);
export default Produit ;