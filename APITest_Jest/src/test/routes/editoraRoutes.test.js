import { beforeEach, afterEach, expect } from '@jest/globals';
import app from '../../app'
import request from 'supertest'

// TESTES DE INTEGRAÇÃO
// https://jestjs.io/pt-BR/docs/api
// supertest simula requisições HTTP
// npm install supertest@6.2.4 --save-exact --save-dev
let server;

// beforeEach - Antes de cada um dos testes
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

// afterEach - Depois de todos os testes
afterEach(() => {
    server.close();
});

describe('GET em /editoras', () => {
    it('Deve retornar uma lista de editoras', async () => {
        // Simula uma requisição na rota /editoras e espera um status code 200 - sucesso
        const resposta = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json') // define os dados de entrada e saída
            .expect(200)
            .expect('content-type', /json/) // verifica se retorna um json

        expect(resposta.body[0].email).toEqual('e@e.com'); // verifica se o email contém o email esperado
    });
});

let idResposta;
describe('POST em /editoras', () => {
    it('Deve adicionar uma nova editora', async () => {
        const resposta = await request(app)
            .post('/editoras')
            .send({
                nome: 'CDC',
                cidade: 'São Paulo',
                email: 's@s.com',
            })
            .expect(201);

        // recupera o id salvo no teste
        idResposta = resposta.body.content.id;
    })

    it('Deve não adicionar nada ao passar o body vazio', async () => {
        await request(app)
            .post('/editoras')
            .send({}) // Não envia nada
            .expect(400) // 500 servidor com problema 
    })
});

describe('GET em /editoras/id', () => {
    it('Deve retornar o recurso selecionado', async () => {
        await request(app)
            .get(`/editoras/${idResposta}`)
            .expect(200);
    })
});

describe('PUT em /editoras/id', () => {
    it('Deve alterar o campo nome', async () => {
        await request(app)
            .put(`/editoras/${idResposta}`)
            .send({ nome: 'Casa do Código'})
            .expect(204); // 204 tudo certo e não tem conteudo
    })
})

describe('DELETE em /editoras/id', () => {
    it('Deletar o recurso adicionado', async () => {
        await request(app)
            .delete(`/editoras/${idResposta}`)
            .expect(200);
    })
});

