import SignupLoginPage from "./SignupLoginPage";
import TestCasesPage from "./TestCasesPage";
import ProductsPage from "./ProductsPage";
import ViewCartPage from "./ViewCartPage";
import ContactUsPage from "./ContactUsPage";

class Header {
  getSignupLoginButton = () => cy.get('a[href="/login"]');
  getTestCasesButton = () => cy.get('header a[href="/test_cases"]');
  getProductsPageButon = () => cy.get('a[href="/products"]');
  getLoggedUsername = () => cy.get(".fa-user").parent();
  getLogoutButton = () => cy.get('[href="/logout"]');
  getViewCartIcon = () => cy.get('#header a[href*="cart"]');
  getContactUsButton = () => cy.get('[href="/contact_us"]');

  clickSignupLoginButton() {
    this.getSignupLoginButton().click();
    return new SignupLoginPage();
  }

  clickTestCasesButton() {
    this.getTestCasesButton().click();
    return new TestCasesPage();
  }

  clickProductsButton() {
    this.getProductsPageButon().click();
    return new ProductsPage();
  }

  clickLogoutButton() {
    this.getLogoutButton().click();
    return new SignupLoginPage();
  }

  clickViewCartIcon() {
    this.getViewCartIcon().click();
    return new ViewCartPage();
  }

  clickContactUsButton() {
    this.getContactUsButton().click();
    return new ContactUsPage();
  }
}

export default Header;
