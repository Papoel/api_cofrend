// # Mongodb Client
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://" + process.env.DB_USER_PASS + "@technisonic-project.oildz.mongodb.net/tronc-commun?retryWrites=true&w=majority"
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })


// # Connexion à la base de donnée
const DATABASE = 'tronc-commun'
client.connect(error => {
    if (error) {
        throw Error(error)
    }

    !error && console.log(`Connecté à la base de donnée`)
    // # Connexion à ma collection :
    const PT2 = client.db(DATABASE).collection("PT2")
    const RT2 = client.db(DATABASE).collection("RT2")

    // perform actions on the collection object
    // ! Page du tronc commun Ressuage 2
    tc.get('/PT2', (request, response) => {
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
    tc.get('/RT2', (request, response) => {
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
})