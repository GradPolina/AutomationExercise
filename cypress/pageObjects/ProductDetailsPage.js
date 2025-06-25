import ViewCartPage from "./ViewCartPage";

class ProductDetailsPage {
  getProductTitle = () => cy.get(".product-information >h2");
  getProductCategory = () => cy.get(".product-information >p ").eq(0);
  getProductVisibility = () => cy.get(".product-information >p ").eq(1);
  getProductCondition = () => cy.get(".product-information >p ").eq(2);
  getProductPrice = () => cy.get(".product-information >span");
  getProductQuantity = () => cy.get("#quantity");
  getAddToCartButton = () => cy.get("button.cart");
  getViewCartLink = () => cy.get('.modal-body a[href*="cart"]');

  inputQuantity(number) {
    this.getProductQuantity().clear().type(number);
    return this;
  }

  clickAddToCartButton() {
    this.getAddToCartButton().click();
    return this;
  }

  clickViewCartLink() {
    this.getViewCartLink().click();
    return new ViewCartPage();
  }
}

export default ProductDetailsPage;
