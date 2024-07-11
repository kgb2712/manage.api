import Fournisseur from '../model/Fournisseurs.js'

export async function AffichelisteDesFournisseurs(req,res){
    const listeDesFournisseurs = await Fournisseur.find(req.body).sort({ createdAt: -1});
    res.send(listeDesFournisseurs);
}


export async function CreerUnFournisseurs(req,res){
    const CreationFournisseur = await Fournisseur.create(req.body);
    res.send( CreationFournisseur);
}

export async function SupprimerUnFournisseurs(req,res){
         const{id}=req.params;

         const SuppressionFournisseurs = await Fournisseur.findByIdAndDelete(id);

         if (!SuppressionFournisseurs){
            return res.status(404).json(`il n'existe pas une personne qui a l'identifiant ${id}`)
         }
         res.status(200).send("Le fournisseur a ete supprimer avec succes");
        
    
}

export async function MiseAjourFournisseurs(req,res){
    const{id}=req.params;

    const MiseAJourFournisseurs = await Fournisseur.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourFournisseurs){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourFournisseurs);

   }

   export async function DetailFournisseurs(req,res){
    const{id}=req.params;

    const DetaillsFournisseurs = await Fournisseur.findById( id);

    if (!DetaillsFournisseurs){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetaillsFournisseurs);

   }