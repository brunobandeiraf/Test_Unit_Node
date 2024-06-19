import ShoppingCart from '../Entities/ShoppingCart.js';
import Item from '../Entities/Item.js';
import { describe, expect, it } from 'vitest';

describe('Teste do carrinho', () => {

    it('Deve inicializar vazio', () => {
        const cart = new ShoppingCart();
        expect(cart.subtotal).toBeNull();
    });

    it('Deve ter itens', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Maça', 0.5, 1);

        const cart = new ShoppingCart();
        cart.addItem(item);
        cart.addItem(item2);

        expect(typeof cart).toBe('object');
        expect(cart.items[0]).toBe(item);
        expect(cart.items[1]).toBe(item2);

        expect(cart.items).toContain(item);
        expect(cart.items).toContain(item2);
    });

    it('Deve ter a propriedade "total" na inicialização', () => {
        const cart = new ShoppingCart();
        expect(cart).toHaveProperty('total');
    });

    it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
        function wrapCartError() {
            const cart = new ShoppingCart();
            cart.checkout();
        }

        expect(wrapCartError).toThrowError('Carrinho de compras vazio');
    });

    it('Deve adicionar o frete', () => {
        const cart = new ShoppingCart();
        cart.addShipping(10);
        expect(cart.shipping).toBe(10);
    });

    it('Deve finalizar as compras', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Mel', 1, 5);

        const cart = new ShoppingCart();
        cart.addItem(item);
        cart.addItem(item2);
        cart.addShipping(10);

        // toStrictEqual - compara a igualdade dos objetos
        expect(cart.checkout()).toStrictEqual({
            subtotal: 15, 
            shipping: 10,
            total: 25
        });
    });

});
