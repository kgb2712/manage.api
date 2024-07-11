import Commande from '../model/commande.js';

export async function AffichelisteDesCommandes(req,res){
    const listeDesCommandes = await Commande.find(req.body);
    res.send(listeDesCommandes);
} 

export async function CreerCommandes(req,res){
    const CreationCommandes = await Commande.create(req.body);
    res.send( CreationCommandes);
}

export async function SupprimerUneCommande(req,res){
    const{id}=req.params;

    const SuppressionCommande = await Commande.findByIdAndDelete(id);

    if (!SuppressionCommande){
       return res.status(404).json(`il n'existe pas une commande qui a l'identifiant ${id}`)
    }
    res.status(200).send("la commande  a ete supprimer avec succes");
   

}
export async function MiseAjourDesCommandes(req,res){
    const{id}=req.params;

    const MiseAJourCommande = await Commande.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourCommande){
       return res.status(404).json(`il n'existe pas une commande qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourCommande);

   }
   export async function DetailCommande(req,res){
    const{id}=req.params;

    const DetaillCommande = await Commande.findById( id);

    if (!DetaillCommande){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetaillCommande);

   }