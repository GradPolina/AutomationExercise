class ProductDetailsPage {
    getProductTitle = () => cy.get ('.product-information >h2');
    getProductCategory = () => cy.get('.product-information >p ').eq(0);
    getProductVisibility =() => cy.get('.product-information >p ').eq(1);
    getProductCondition =() => cy.get('.product-information >p ').eq(2);
    getProductPrice = () => cy.get('.product-information >span')
}

export default ProductDetailsPage;