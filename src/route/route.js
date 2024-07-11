import express from 'express';
import { AffichelisteDesFournisseurs, CreerUnFournisseurs, DetailFournisseurs, MiseAjourFournisseurs, SupprimerUnFournisseurs} from '../controler/apiControler.js'
import { AffichelisteDesClients, CreerClients, DetailClient, MiseAjourUnClient, SupprimerUnClient } from '../controler/clientController.js';
import { AffichelisteDesStocks, CreerUnStocks, DetailStock, MiseAjourDuStock, SupprimerStocks, } from '../controler/stockController.js';
import { AffichelisteDesCategorie, CreerCategorie, DetailCategorie, MiseAjourCategorie, SupprimerUneCategorie } from '../controler/categoriesController.js';
import { AffichelisteDesPersonnes, CreerPersonnes, DetailUnePersonne, MiseAjourPersonnels, SupprimerUnePersonne,} from '../controler/personnelsController.js';

import { AffichelisteDesCommandes, CreerCommandes,  DetailCommande,  MiseAjourDesCommandes,  SupprimerUneCommande } from '../controler/commandeController .js';
import { AffichelisteDesProduits, CreerProduits, DetailProduit, MiseAjourDuProduits, SupprimerUnProduits,} from '../controler/produitController .js';

export const routes = express.Router();

routes.get('/listeDesFournisseurs',AffichelisteDesFournisseurs);
routes.post('/creationFournisseur',CreerUnFournisseurs);
routes.delete('/SuppressionFournisseurs/:id', SupprimerUnFournisseurs);
routes.put('/MiseAJourFournisseurs/:id', MiseAjourFournisseurs);
routes.get('/DetailsFournisseurs/:id',DetailFournisseurs);



routes.get('/listeDesClients',AffichelisteDesClients);
routes.post('/CreationClients',CreerClients);
routes.delete('/SuppressionClient/:id',SupprimerUnClient);
routes.put('/MiseAJourClients/:id',MiseAjourUnClient);
routes.get('/DetaillsCleint/:id',DetailClient);

routes.get('/listeDesStocks',AffichelisteDesStocks);
routes.post('/CreationStocks',CreerUnStocks);
routes.delete('/SupprimerStock/:id',SupprimerStocks);
routes.put('/MiseAJourStock/:id',MiseAjourDuStock);
routes.get('/DetaillStock/:id',DetailStock);


routes.get('/listeDesCategories',AffichelisteDesCategorie);
routes.post('/CreationCategories',CreerCategorie);
routes.delete('/SuppressionCategorie/:id',SupprimerUneCategorie);
routes.put('/MiseAJourCategories/:id',MiseAjourCategorie);
routes.get('/DetaillsCategorie/:id',DetailCategorie);



routes.get('/listeDesPersonnes',AffichelisteDesPersonnes);
routes.post('/CreerPersonnels',CreerPersonnes);
routes.delete('/SuppressionPersonnel/:id',SupprimerUnePersonne);
routes.put('/MiseAJourDesPersonnels/:id',MiseAjourPersonnels);
routes.get('/DetailPersonnel/:id',DetailUnePersonne);


routes.get('/listeDesProduits',AffichelisteDesProduits)
routes.post('/CreationProduits',CreerProduits);
routes.delete('/SuppressionProduits/:id',SupprimerUnProduits);
routes.put('/MiseAJourProduit/:id',MiseAjourDuProduits);
routes.get('/DetaillProduit/:id',DetailProduit);



routes.get('/listeDesCommandes',AffichelisteDesCommandes);
routes.post('/CreationCommandes',CreerCommandes);
routes.delete('/SuppressionCommande/:id',SupprimerUneCommande);
routes.put('/MiseAJourCommande/:id',MiseAjourDesCommandes);
routes.get('/DetaillCommande/:id',DetailCommande);