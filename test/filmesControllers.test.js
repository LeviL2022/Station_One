import superTest from 'supertest';
import app from '../src/app.js';

describe('Routes::', () => {
    //Teste de Sucesso.
    it('Filmes e series', async () => {
        const response = await superTest(app).get('/');
        expect(response.status).toBe(200);
    })
    it('Lista de Filmes', async () => {
        const response = await superTest(app).get('/filmes');
        expect(response.status).toBe(200)
    })
    it('Lista de Filmes por Id', async () => {
        const response = await superTest(app).get('/filmes/:id');
        expect(response.status).not.toBe(200)
    })
    it('Cadastro de Filmes', async () => {
        const response = await superTest(app).post('/filmes');
        expect(response.status).not.toBe(201)
    })
    it('Atualiza Filme', async () => {
        const response = await superTest(app).put('/filmes/:id');
        expect(response.status).not.toBe(200)
    })
    it('Exclui Filme', async () => {
        const response = await superTest(app).delete('/filmes/:id');
        expect(response.status).not.toBe(200)
    })

    //Testes de falha.

    it('Lista de Filmes Por Id (Falha)', async () => {
        const response = await superTest(app).get('/filmes/:id');
        expect(response.status).toBe(400)
    })
    it('Cadastro de Filmes (Falha)', async () => {
        const response = await superTest(app).post('/filmes');
        expect(response.status).toBe(400)
    })
    it('Atualização de filme (Falha)', async () => {
        const response = await superTest(app).put('/filmes/:id');
        expect(response.status).toBe(500)
    })
    it('Exclui Filme (Falha)', async () => {
        const response = await superTest(app).delete('/filmes/:id');
        expect(response.status).toBe(500)
    })
})
