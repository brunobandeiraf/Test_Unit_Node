import Editora from '../../models/editora'
import { describe } from '@jest/globals'

describe('Testando o modelo Editora', () => {
    const objetoEditora = {
        nome: 'CDC',
        cidade: 'São Paulo', 
        email: 'c@c.com',
    };

    it('Deve instanciar uma nova editora', () => {
        const editora = new Editora(objetoEditora);

        expect(editora).toEqual(
            expect.objectContaining(objetoEditora),
        );
    })

    // skip - Pular o teste
    it.skip('Deve salvar editora no BD', () => {
        const editora = new Editora(objetoEditora);

        editora.salvar().then((dados) => {
            expect(dados.nome).toBe('CDC');
        })
    })

    it('Deve salvar editora no BD usando sintaxe moderna', async() => {
        const editora = new Editora(objetoEditora);

        const dados = await editora.salvar();

        const retornado = await Editora.pegarPeloId(dados.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoEditora, 
                created_at: expect.any(String),
                updated_at: expect.any(String),
            })
        )
    })
})