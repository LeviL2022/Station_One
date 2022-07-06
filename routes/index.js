import express from 'express'
import filmesRoutes from './filmesRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Filmes e Series' })
    })

    app.use(
        express.json(),
        filmesRoutes
    )
}

export default routes;  
