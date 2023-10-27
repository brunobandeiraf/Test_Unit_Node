# API Livraria

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto

Projeto de API REST para prática de JavaScript.
Livraria com sistema de cadastro e manejo de livros, autores e editoras.


## Stack utilizada

* `Node.js` v16.14.2
* `express` v4.18.1,
* `knex` v2.1.0
* `sqlite3` v5.0.8
* `Vitest` 

### Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/livros`
* `GET /livros`
* `GET /livros/:id`
* `POST /livros`
* `PUT /livros/:id`
* `DELETE /livros/:id`

`/autores`
* `GET /autores`
* `GET /autores/:id`
* `GET /autores/:id/livros`
* `POST /autores`
* `PUT /autores/:id`
* `DELETE /autores/:id`

`/editoras`
* `GET /editoras`
* `GET /editoras/:id`
* `GET /editoras/:id/livros`
* `POST /editoras`
* `PUT /editoras/:id`
* `DELETE /editoras/:id`


## Trabalhando com Testes - Vitest 
Plugin vite para compreender as importações com @
npm i vitest vite-tsconfig-paths -D

## Visualizar uma Interface para os Testes realizados
npm i -D @vitest/ui

## Super Test - Requisições HTTP sem precisar colocar app no ar
npm i supertest -D

## Biblioteca JS, mas para adaptar ao TS o supertest
npm i @types/supertest -D