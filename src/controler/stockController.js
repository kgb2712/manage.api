import Stock from '../model/stocks.js';

export async function AffichelisteDesStocks(req,res){
    const listeDesStocks = await Stock.find(req.body);
    res.send(listeDesStocks);
}

export async function CreerUnStocks(req,res){
    const CreationStocks = await Stock.create(req.body);
    res.send(CreationStocks);
}

export async function SupprimerStocks(req,res){
    const{id}=req.params;

    const SupprimerStock = await Stock.findByIdAndDelete(id);

    if (!SupprimerStock){
       return res.status(404).json(`il n'existe pas un stock qui a l'identifiant ${id}`)
    }
    res.status(200).send("le stock  a ete supprimer avec succes");
   

}

export async function MiseAjourDuStock(req,res){
    const{id}=req.params;

    const MiseAJourStock = await Stock.findByIdAndUpdate(
        {_id:id},req.body, {
           new:true,
           runValidators:true 
        }
    );

    if (!MiseAJourStock){
       return res.status(404).json(`il n'existe pas de stock qui a l'identifiant ${id}`)
    }
    res.status(200).json(MiseAJourStock);

   }

   export async function DetailStock(req,res){
    const{id}=req.params;

    const DetaillStock = await Stock.findById( id);

    if (!DetaillStock){
       return res.status(404).json(`il n'existe pas un fournisseur qui a l'identifiant ${id}`)
    }
    res.status(200).json(DetaillStock);

   }



