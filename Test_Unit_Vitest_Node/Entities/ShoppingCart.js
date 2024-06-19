class ShoppingCart {
    constructor() {
      this.items = [];
      this.subtotal = null;
      this.shipping = null;
      this.total = null;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    addShipping(cost) {
      this.shipping = cost;
    }
  
    calculateTotal() {
      this.subtotal = this.items.reduce((accum, item) => accum + item.getTotalValue(), 0);
      return this.subtotal + this.shipping;
    }
  
    checkout() {
      if (this.items.length === 0) {
        throw new Error('Carrinho de compras vazio');
      }
  
      this.total = this.calculateTotal();
  
      return {
        subtotal: this.subtotal,
        shipping: this.shipping,
        total: this.total,
      };
    }
  }
  
  export default ShoppingCart;
  