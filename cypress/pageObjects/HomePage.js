import Header from "./Header";
import ProductDetailsPage from "./ProductDetailsPage";

class HomePage {
  getSubscription = () => cy.get("h2");
  getSubscriptionEmail = () => cy.get("#susbscribe_email");
  getSubscriptionArrow = () => cy.get("#subscribe");
  getSuccessMessage = () => cy.get("#success-subscribe");
  getViewProductButton = (id) => cy.get(`a[href="/product_details/${id}"]`);
  getProductOverlayByIndex = (index) => cy.get('.product-overlay').eq(index);
  getAddToCartButtonById = (id) => cy.get(`.overlay-content a[data-product-id="${id}"]`);
  getContinueShoppingButton = () => cy.get('.modal-footer button.btn-success');

  constructor() {
    this.header = new Header();
  }

  inputSubscriptionEmail(text) {
    this.getSubscriptionEmail().type(text);
    return this;
  }

  clickSubscriptionArrow() {
    this.getSubscriptionArrow().click();
    return this;
  }

  clickViewProductButton(id) {
    this.getViewProductButton(id).click();
    return new ProductDetailsPage();
  }
  
  hoverOnProductByIndex(index) {
    this.getProductOverlayByIndex(index).scrollIntoView().realHover();
    return this;
  }

  clickAddToCartById(id) {
    this.getAddToCartButtonById(id).scrollIntoView().click();
    return this;
  }

  clickContinueShopping() {
    this.getContinueShoppingButton().click();
    return this;
  }
}

export default HomePage;
