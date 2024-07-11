import Categorie from '../model/categories.js';

export async function AffichelisteDesCategorie(req,res){
    const listeDesCategories = await Categorie.find(req.body).sort({ createdAt: -1});
    res.send(listeDesCategories);
}
export async function CreerCategorie(req,res){
    const CreationCategories = await Categorie.create(req.body);
    res.send(CreationCategories);
}
export async function SupprimerUneCategorie(req,res){
    const{id}=req.params;

    const SuppressionCategorie = await Categorie.findByIdAndDelete(id);

    if (!SuppressionCategorie){
       return res.status(404).json(`il n'existe pas une categorie qui a l'identifiant ${id}`)
    }
    res.status(200).send("la categorie  a ete supprimer avec succes");
   

}

export async function MiseAjourCategorie(req,res){
    const{id}=req.params;

    const MiseAJourCategories = await Categorie.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourCategories){
       return res.status(404).json(`il n'existe pas une categorie qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourCategories);

   }

   export async function DetailCategorie(req,res){
    const{id}=req.params;

    const DetaillsCategorie = await Categorie.findById( id);

    if (! DetaillsCategorie ){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetaillsCategorie);

   }