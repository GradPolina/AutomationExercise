/// <reference types="cypress" />

import signupLoginData from "../fixtures/signupLoginPageData.json";
import Header from "../pageObjects/Header";
import SignupLoginPage from "../pageObjects/SignupLoginPage";

describe("Logout User", () => {
  const header = new Header();
  const signupLoginPage = new SignupLoginPage();

  it("TC_4 | Logout User", {tags: ['@e2e']}, () => {
    cy.visit("/");
    header
      .clickSignupLoginButton()
      .getLoginToYourAccountTitle()
      .should("have.text", signupLoginData.loginHeaderText);
    signupLoginPage.inputEmailforLogin(
      signupLoginData.emailAddressLoginToYourAccount
    );
    signupLoginPage.inputPassword(signupLoginData.password);
    signupLoginPage.clickLoginButton();
    header
      .getLoggedUsername()
      .should("be.visible")
      .and("contain.text", signupLoginData.loggedUserName);
    header.clickLogoutButton();
    signupLoginPage
      .getLoginToYourAccountTitle()
      .should("have.text", signupLoginData.loginHeaderText);
  });
});
