import HomePage from "./HomePage";
import RegesterUserPage from "./RegesterUserPage";

class SignupLoginPage {
  getLoginToYourAccountTitle = () => cy.get(".login-form h2");
  getEmailForLoginField = () => cy.get('.login-form input[type="email"]');
  getPasswordField = () => cy.get('input[type="password"]');
  getLoginButton = () => cy.get('.login-form button[type="submit"]');

  getSignupTitle = () => cy.get(".signup-form h2");
  getNameField = () => cy.get('[data-qa="signup-name"]');
  getEmailForSignup = () => cy.get('[data-qa="signup-email"]');
  getSignupButton = () => cy.get('[data-qa="signup-button"]');


  getErrorMessageIncorectCredentials = () => cy.get('.login-form p');

  inputEmailforLogin(email) {
    this.getEmailForLoginField().type(email);
    return this;
  }

  inputPassword(password) {
    this.getPasswordField().type(password);
    return this;
  }

  clickLoginButton() {
    this.getLoginButton().click();
    return new HomePage();
  }

  inputNameForSignUp(name) {
    this.getNameField().type(name);
    return this;
  }

  inputEmailForSingup(email) {
    this.getEmailForSignup().type(email);
    return this;
  }

  clickSignUpButton() {
    this.getSignupButton().click();
    return new RegesterUserPage();
  }
}

export default SignupLoginPage;
