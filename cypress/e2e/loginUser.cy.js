/// <reference types = "cypress"/>
import Header from "../pageObjects/Header";
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import signupLoginPageData from "../fixtures/signupLoginPageData.json";

describe("Login User", ()=> {
    const header = new Header();
    const signupLoginPage = new SignupLoginPage();

    it("TC_3 | Login User with incorrect email and password", ()=> {
        cy.visit('/');
        header.clickSignupLoginButton();
        signupLoginPage.getLoginToYourAccountTitle().should('be.visible');
        signupLoginPage.inputEmailAddress(signupLoginPageData.incorrectEmail);
        signupLoginPage.inputPassword(signupLoginPageData.incorrectPassword);
        signupLoginPage.clickLoginButton();
        signupLoginPage.getErrorMessageIncorectCredentials()
            .should('have.text', signupLoginPageData.errorMessageIncorectCredentials)
            .and('have.css', 'color', 'rgb(255, 0, 0)');
    })
})