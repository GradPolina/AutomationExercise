import ProductPage from "./ProductDetailsPage";
import ViewCart from "./ViewCartPage";

class ProductsPage {
    getAllProductsListTitle = () => cy.get('.features_items >.title'); 
    getProductslist = () => cy.get('.features_items');
    getProductViewProduct1 = () => cy.get('a[href="/product_details/1"]');
    getSearch = () => cy.get('#search_product');
    getSearchSubmitButton = () => cy.get('#submit_search');
    getSearchResultsTitle = () => cy.get('h2.title');
    getProductsByIndex = (index) => cy.get('.single-products').eq(index);
    getAddItemToCartByProductId = (id) => cy.get(`.overlay-content a[data-product-id="${id}"] .fa-shopping-cart`);
    getContinueShoppingButton = () => cy.get('.btn-success');
    getViewCartLinkPopUp = () => cy.get('.modal-body a[href*="cart"]');

    clickViewproduct1(){
        this.getProductViewProduct1().click();
        return new ProductPage();
    }

    clickSearchSubmitButton(){
        this.getSearchSubmitButton().click()
        return this;
    }

    inputSearchValue(text){
        this.getSearch().type(text);
        return this;
    }

    hoverOnProductByIndex(index) {
        this.getProductsByIndex(index).scrollIntoView().realHover();
        return this;
    }

    clickAddToCartById(id) {
        this.getAddItemToCartByProductId(id).click();
        return this;
    }

    clickContinueShopping() {
        this.getContinueShoppingButton().click();
        return this;
    }

    clickViewCartLinkPopUp() {
        this.getViewCartLinkPopUp().click();
        return new ViewCart();
    }

}

export default ProductsPage;