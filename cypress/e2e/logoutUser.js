/// <reference types="cypress" />

import signupLoginData from "../fixtures/signupLoginPageData.json"
import Header from "../pageObjects/Header";
import LoginToYourAccount from "../pageObjects/SignupLoginPage";

describe("TC_4|Logout User", () => {
    const header = new Header();
    const loginToYourAccount = new LoginToYourAccount();
    
    it('TC_4.01 < Verify is visible "Login to your account"', ()=>{
        cy.visit('/');
        header.clickSignupLoginButton()
          .getLoginToYourAccountTitle()
          .should('have.text', signupLoginData.loginHeaderText);
    });

    it('TC_4.02 < Verify that "Logged in as UserName" is visible', ()=>{
        cy.visit('/');
        header.clickSignupLoginButton()
        loginToYourAccount.inputEmailAddressField(signupLoginData.EmailAddressLoginToYourAccount)
        loginToYourAccount.inputPasswordField(signupLoginData.Password)
        loginToYourAccount.clickLoginButton()
        header
          .getLoggedUserName()
          .should('be.visible');
    });

});