import Header from "./Header";
import ProductDetailsPage from "./ProductDetailsPage";

class HomePage {
  getSubscription = () => cy.get("h2");
  getSubscriptionEmail = () => cy.get("#susbscribe_email");
  getSubscriptionArrow = () => cy.get("#subscribe");
  getSuccessMessage = () => cy.get("#success-subscribe");
  getViewProductButton = (id) => cy.get(`a[href="/product_details/${id}"]`);
  getAddToCartButtonById = (id) => cy.get(`.overlay-content a[data-product-id="${id}"]`);
  getContinueShoppingButton = () => cy.get('.modal-footer button.btn-success');
  getProductOverlayByProductId = (id) => cy.get(`.product-overlay:has(a[data-product-id="${id}"])`);

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

  hoverOnProductById(id) {
    this.getProductOverlayByProductId(id)
      .scrollIntoView()
      .invoke('show');
    return this;
  }

  clickAddToCartById(id) {
    this.getAddToCartButtonById(id).then(($el) => {
      $el[0].click();
    });
    return this;
  }

  clickContinueShopping() {
    this.getContinueShoppingButton().click();
    return this;
  }
}

export default HomePage;
