import mongoose from 'mongoose';


const server = '127.0.0.1:27017'; 

const database = 'manageDb';  

class Database {

  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.set("strictQuery", false);

    mongoose.connect(`mongodb://${server}/${database}`)

    .then(() => {
        console.log('Connecte avec success')
    })

    .catch(err => {
        console.error('Erreur de connexion')
    })

}


}

export default Database;