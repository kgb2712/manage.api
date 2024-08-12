

import mongoose from "mongoose";

let CommandeSchema = new mongoose.Schema({
    nomEtPrenomClient :{type:'string', require:true },
    telephoneClient :{type:'string', require:true },

    montantCommande:{type:'string', require:true },
    produits:{type:'string', require:true },
    montantRecu :{type:'string', require:true },
    resteMontant :{type:'string', require:true },
    createdAt: {
        type: Date,
        default: Date.now
        }
    
})
const Commande = mongoose.model('commandes',CommandeSchema);
export default Commande ;