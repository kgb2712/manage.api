

import mongoose from "mongoose";

let FournisseurSchema = new mongoose.Schema({
    Nom :{type:'string', require:true },
    telephone : {type:'string', require:true},
    email:{type:'string', require:false},
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Fournisseur = mongoose.model('fournisseur',FournisseurSchema);
export default Fournisseur;