import ShoppingCart from './Entities/ShoppingCart.js';
import Item from './Entities/Item.js';

const cart = new ShoppingCart();

cart.addItem(new Item('Maça', 1, 3));
cart.addItem(new Item('Banana', 1.4, 5));
cart.addItem(new Item('Melancia', 2, 1));
cart.addItem(new Item('Uva', 4.3, 2));
cart.addItem(new Item('Acai', 3, 5));

cart.addShipping(15);

cart.calculateTotal();

cart.checkout();

console.log(cart);
