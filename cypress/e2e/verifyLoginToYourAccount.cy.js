/// <reference types="cypress" />
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import signupLoginData from "../fixtures/signupLoginPageData.json"
import Header from "../pageObjects/Header";

describe("TC_4|Logout User", ()=>{
    const header = new Header();
    const signupLoginPage = new SignupLoginPage();

    it('TC_4.01 < Verify is visible "Login to your account"', ()=>{
        cy.visit('/');
        header.clickSignupLoginButton()
          .getLoginToYourAccountTitle()
          .should('be.visible')
          .and('have.text', signupLoginData.loginHeaderText);
    });

});