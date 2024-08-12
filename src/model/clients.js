

import mongoose from "mongoose";

let ClientSchema = new mongoose.Schema({
    nom :{type:'string', require:true },
    prenom :{type:'string', require:true },
    telephone : {type:'string', require:true},
    createdAt: {
        type: Date,
        default: Date.now
   }
})
const Clients = mongoose.model('clients',ClientSchema);
export default Clients;