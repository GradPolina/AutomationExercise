class ViewCart {
  getEmptyCartMessage = () => cy.get("#empty_cart b");
  getSubscription = () => cy.get("h2");
  getSubscriptionEmail = () => cy.get("#susbscribe_email");
  getSubscriptionArrow = () => cy.get("#subscribe");
  getSuccessMessage = () => cy.get("#success-subscribe");
  getCartProductCell = () => cy.get("#cart_info_table .cart_product");
  getCartRows = () => cy.get("#cart_info_table tbody tr");
  getRowProductId = ($row) => cy.wrap($row).invoke("attr", "id");
  getProductName = ($row) => cy.wrap($row).find(".cart_description h4 a");
  getProductPrice = ($row) => cy.wrap($row).find(".cart_price p");
  getProductQuantity = ($row) => cy.wrap($row).find(".cart_quantity .disabled");
  getProductTotalPrice = ($row) => cy.wrap($row).find(".cart_total_price");
  getProductCount = () => cy.get(".cart_quantity button");

  inputSubscriptionEmail(text) {
    this.getSubscriptionEmail().type(text);
    return this;
  }

  clickSubscriptionArrow() {
    this.getSubscriptionArrow().click();
    return this;
  }

  verifyNumberOfItemsInCart(expectedCount) {
    this.getCartProductCell().then(($items) => {
      expect($items.length).to.equal(expectedCount);
    });
  }
}

export default ViewCart;
