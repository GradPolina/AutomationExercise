/// <reference types = "cypress"/>
import Header from "../pageObjects/Header";
import SignupLogin from "../pageObjects/SignupLoginPage";
import signupLoginPageData from "../fixtures/signupLoginPageData.json";

describe("Login User", ()=> {
    const header = new Header();
    const signupLogin = new SignupLogin();

    it("TC_3 | Login User with incorrect email and password", ()=> {
        cy.visit('/');
        header.clickSignupLoginButton();
        signupLogin.getLoginToYourAccountTitle().should('be.visible');
        signupLogin.getEmailAddressField().type(signupLoginPageData.incorrectEmail);
        signupLogin.getPasswordField().type(signupLoginPageData.incorrectPassword);
        signupLogin.getLoginButton().click();
        signupLogin.getErrorMessageIncorectCredentials()
            .should('have.text', signupLoginPageData.errorMessageIncorectCredentials)
            .and('have.css', 'color', 'rgb(255, 0, 0)');
    })
})