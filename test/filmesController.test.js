import FilmesController from '../controllers/filmesController.js'
import { describe } from 'jest-circus';
import { expect } from 'expect';

const filmes = FilmesController;

describe('cadastraFilmes::', () => {
    it('deve ser uma função', () => {
        expect(typeof filmes).toBe('function')
    })
    it('deve cadastrar um filme', () => {
        expect()
    })
})
