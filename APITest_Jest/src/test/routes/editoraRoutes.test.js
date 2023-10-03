import { beforeEach, beforeEach } from '@jest/globals';
import app from '../../app'

// TESTES DE INTEGRAÇÃO
// https://jestjs.io/pt-BR/docs/api
let server;

// beforeEach - Antes de cada um dos testes
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

// afterEach - Depois de todos os testes
afterEach(() => {
    server.close();
})
