class ViewCart {
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

}

export default ViewCart;