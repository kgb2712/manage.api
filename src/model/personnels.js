

import mongoose from "mongoose";

let PersonnelSchema = new mongoose.Schema({
    nom :{type:'string', require:true },
    prenom :{type:'string', require:true },

    telephone :{type:'string', require:true },
    photo :{type:'string', require:true },
    role :{type:'number', require:true },
    age :{type:'number', require:true },
    
})
const Personnel = mongoose.model('personnnels',PersonnelSchema);
export default Personnel ;