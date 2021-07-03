// - Env
const PORT = 7000
// # Imports
const express = require('express')
const cors = require('cors')
const server = express()
const routes = express.Router()

server.use("/technisonic", routes)

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// # Cors
server.use(cors( {
    origin: '*'
}))

// # Mongodb Client
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://***@technisonic-project.oildz.mongodb.net/tronc-commun?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })


// # Connexion au server
server.listen(PORT, () => {
    console.log(`Serveur démaré, lancer l'application dans le navigateur: http://localhost:${PORT}`)
})

// # Connexion à la base de donnée
const DATABASE = 'tronc-commun'
client.connect(error => {
    if (error) {
        throw Error(error)
    }

    !error && console.log(`Connecté à la base de donnée`)
    // # Connexion à ma collection :
    const PT2 = client.db("tronc-commun").collection("PT2")
    const RT2 = client.db("tronc-commun").collection("RT2")

    // perform actions on the collection object
    // ! Page du tronc commun Ressuage 2
    routes.get('/PT2', (request, response) => {
        PT2
            .find()
            .toArray()
            .then((error, resultat) => {
                if (error) {
                    return response.send(error)
                }
                response.status(200).send({ resultat })
            })
            .catch((error) => response.send(error))
    })
    // ! Page du tronc commun Radiographie 2
    routes.get('/RT2', (request, response) => {
        RT2
            .find()
            .toArray()
            .then((error, resultat) => {
                if (error) {
                    return response.send(error)
                }
                res.status(200).send({ resultat })
            })
            .catch((error) => response.send(error))
    })
});

// #### ROUTES ####

// + Page d'accueil
routes.get('/', (request, res) => {
    res.send('Tronc commun COFREND niveau II')
    DATABASE.inventory.find()

})



