import Header from "./Header";

class SignupLoginPage {
  getLoginToYourAccountTitle = () => cy.get(".login-form h2");
  getEmailAddressField = () => cy.get('.login-form input[type="email"]');
  getPasswordField = () => cy.get('input[type="password"]');
  getLoginButton = () => cy.get('.login-form button[type="submit"]');
  getErrorMessageIncorectCredentials = () => cy.get('.login-form p');

  inputEmailAddress(email) {
    this.getEmailAddressField().type(email);
    return this;
  }
  inputPassword(password) {
    this.getPasswordField().type(password);
    return this;
  }
  clickLoginButton() {
    this.getLoginButton().click();
    return new Header();
  }
}

export default SignupLoginPage;
