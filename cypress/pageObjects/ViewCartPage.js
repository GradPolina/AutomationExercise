class ViewCart {
<<<<<<< HEAD
  getEmptyCartMessage = () => cy.get("#empty_cart b");
  getSubscription = () => cy.get("h2");
  getSubscriptionEmail = () => cy.get("#susbscribe_email");
  getSubscriptionArrow = () => cy.get("#subscribe");
  getSuccessMessage = () => cy.get("#success-subscribe");

  inputSubscriptionEmail(text) {
    this.getSubscriptionEmail().type(text);
    return this;
  }

  clickSubscriptionArrow() {
    this.getSubscriptionArrow().click();
    return this;
  }
=======
    getEmptyCartMessage = () => cy.get('#empty_cart b');
    getCartProductCell = () => cy.get('#cart_info_table .cart_product');
    getCartRows = () => cy.get('#cart_info_table tbody tr');
    getRowProductId = ($row) => cy.wrap($row).invoke('attr', 'id');
    getProductName = ($row) => cy.wrap($row).find('.cart_description h4 a');
    getProductPrice = ($row) => cy.wrap($row).find('.cart_price p');
    getProductQuantity = ($row) => cy.wrap($row).find('.cart_quantity .disabled');
    getProductTotalPrice = ($row) => cy.wrap($row).find('.cart_total_price');

    verifyNumberOfItemsInCart(expectedCount) {
      this.getCartProductCell().then($items => {
        expect($items.length).to.equal(expectedCount);
      });
    }

>>>>>>> d55232ebb5481db027f36192d842eaf668c2de55
}

export default ViewCart;
