import filmesController from '../controllers/filmesController.js'
import filmes from '../models/Filmes.js'

test('listar filmes, traz todos os filmes', () => {
    expect(filmesController.listarFilmes)
        .toBe(filmes);
});