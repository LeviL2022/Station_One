import express from 'express'
import FilmesControllers from '../controllers/filmesController.js'

const router = express.Router();

router
    .get('/filmes', FilmesControllers.listarFilmes)
    .get('/filmes/:id', FilmesControllers.listarFilmesPorId)
    .post('/filmes', FilmesControllers.cadastraFilme)
    .put('/filmes/:id', FilmesControllers.atualizaFilme)
    .delete('/filmes/:id', FilmesControllers.excluiFilme)

export default router;