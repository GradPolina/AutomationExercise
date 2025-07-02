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
  getWriteReview = () => cy.get('a[href="#reviews"]');
  getReviewNameInput = () => cy.get("#name");
  getReviewEmailInput = () => cy.get("#email");
  getReviewTextArea = () => cy.get("textarea#review");
  getReviewSubmitButton = () => cy.get("#button-review");
  getThankMessage = () => cy.get(".alert-success span");

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

  inputReviewName(name) {
    this.getReviewNameInput().clear().type(name);
    return this;
  }

  inputReviewEmail(email) {
    this.getReviewEmailInput().clear().type(email);
    return this;
  }

  inputReviewTextArea(review) {
    this.getReviewTextArea().clear().type(review);
    return this;
  }

  clickReviewSubmitButton() {
    this.getReviewSubmitButton().click();
    return this;
  }
}

export default ProductDetailsPage;
