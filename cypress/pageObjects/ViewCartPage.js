class ViewCart {
    getEmptyCartMessage = () => cy.get('#empty_cart b');
}

export default ViewCart;