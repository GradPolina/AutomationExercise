import Header from "./Header";
import ProductDetailsPage from "./ProductDetailsPage";

class HomePage {
  getSubscription = () => cy.get("h2");
  getSubscriptionEmail = () => cy.get("#susbscribe_email");
  getSubscriptionArrow = () => cy.get("#subscribe");
  getSuccessMessage = () => cy.get("#success-subscribe");
  getViewProductButton = (id) => cy.get(`a[href="/product_details/${id}"]`);

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
}

export default HomePage;
