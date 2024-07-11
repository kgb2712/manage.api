import Client from '../model/clients.js';

export async function AffichelisteDesClients(req,res){
    const listeDesClients = await Client.find(req.body);
    res.send(listeDesClients);
}

export async function CreerClients(req,res){
    const CreationClients = await Client.create(req.body);
    res.send(CreationClients);
}
export async function SupprimerUnClient(req,res){
    const{id}=req.params;

    const SuppressionClient = await Client.findByIdAndDelete(id);

    if (!SuppressionClient){
       return res.status(404).json(`il n'existe pas un client qui a l'identifiant ${id}`)
    }
    res.status(200).send("le client  a ete supprimer avec succes");
   

}

export async function MiseAjourUnClient(req,res){
    const{id}=req.params;

    const MiseAJourClients = await Client.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourClients){
       return res.status(404).json(`il n'existe pas un client qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourClients);

   }

   export async function DetailClient(req,res){
    const{id}=req.params;

    const DetaillsCleint = await Client.findById( id);

    if (!DetaillsCleint ){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetaillsCleint);

   }