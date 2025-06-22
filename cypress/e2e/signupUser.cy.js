/// <reference types = "cypress"/>
import Header from "../pageObjects/Header";
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import signupLoginPageData from "../fixtures/signupLoginPageData.json";

describe("Signup User", () => {
     const header = new Header();
     const signupLoginPage = new SignupLoginPage(); 
it("TC_5 | Register User with existing email",() => {
    cy.visit('/');
    header.clickSignupLoginButton(); 
    signupLoginPage.getLoginToYourAccountTitle().should('be.visible')
    signupLoginPage.inputNameForSignUp(signupLoginPageData.loggedUserName)
    signupLoginPage.inputEmailForSingup(signupLoginPageData.emailAddressLoginToYourAccount)
    signupLoginPage.clickSignUpButton();
    signupLoginPage.getErrorMessageSignUpForm()
        .should('have.text', signupLoginPageData.errorMessageEmailAlreadyExist);
    })
})
