
import Personnel from '../model/personnels.js';

export async function AffichelisteDesPersonnes(req,res){
    const listeDesPersonnels = await Personnel.find(req.body);
    res.send(listeDesPersonnels);
}


export async function CreerPersonnes(req,res){
    const CreerPersonnels = await Personnel.create(req.body);
    res.send(CreerPersonnels);
}

export async function SupprimerUnePersonne(req,res){
    const{id}=req.params;

    const SuppressionPersonnel = await Personnel.findByIdAndDelete(id);

    if (!SuppressionPersonnel){
       return res.status(404).json(`il n'existe pas un Personnel qui a l'identifiant ${id}`)
    }
    res.status(200).send("la personne  a ete supprimer avec succes");
   

}

export async function MiseAjourPersonnels(req,res){
    const{id}=req.params;

    const MiseAJourDesPersonnels = await Personnel.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourDesPersonnels){
       return res.status(404).json(`il n'existe pas de personne qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourDesPersonnels);

   }

   export async function DetailUnePersonne(req,res){
    const{id}=req.params;

    const DetailPersonnel = await Personnel.findById( id);

    if (!DetailPersonnel){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetailPersonnel);

   }

   