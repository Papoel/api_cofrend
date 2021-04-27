

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