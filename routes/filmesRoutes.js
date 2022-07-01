import express from 'express'
import FilmesControllers from '../controllers/filmesController.js'

const router = express.Router();

router
    .get('/filmes', FilmesControllers.listarFilmes)
    .get('/filmes/:id', FilmesControllers.listarFilmesPorId)

export default router;