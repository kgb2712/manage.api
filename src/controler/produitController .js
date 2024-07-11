import Produit from '../model/produits.js';

export async function AffichelisteDesProduits(req,res){
    const listeDesProduits = await Produit.find(req.body).sort({ createdAt: -1});;
    res.send(listeDesProduits);
}


export async function CreerProduits(req,res){
    const CreationProduits = await Produit.create(req.body);
    res.send(CreationProduits);
}
export async function SupprimerUnProduits(req,res){
    const{id}=req.params;

    const SuppressionProduits = await Produit.findByIdAndDelete(id);

    if (!SuppressionProduits){
       return res.status(404).json(`il n'existe pas un Personnel qui a l'identifiant ${id}`)
    }
    res.status(200).send("la personne  a ete supprimer avec succes");
   

}

export async function MiseAjourDuProduits(req,res){
    const{id}=req.params;

    const MiseAJourProduit = await Produit.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourProduit){
       return res.status(404).json(`il n'existe pas de produit qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourProduit);

   }

   export async function DetailProduit(req,res){
    const{id}=req.params;

    const DetaillProduit = await Produit.findById( id);

    if (!DetaillProduit){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetaillProduit );

   }