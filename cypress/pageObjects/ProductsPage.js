import ProductPage from "./ProductPage"

class ProductsPage {
    getAllProductsListTitle = () => cy.get('.features_items >.title'); 
    getProductslist = () => cy.get('.features_items');
    getProductViewProduct1 = () => cy.get('a[href="/product_details/1"]');

    clickViewproduct1(){
        this.getProductViewProduct1().click();
        return new ProductPage();
    }

}

export default ProductsPage;