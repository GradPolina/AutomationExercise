/// <reference types = "cypress"/>

import AccountCreatedPage from "../pageObjects/AccountCreatedPage";
import CheckoutPage from "../pageObjects/CheckoutPage";
import Header from "../pageObjects/Header";
import HomePage from "../pageObjects/HomePage";
import RegesterUserPage from "../pageObjects/RegesterUserPage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import ViewCartPage from "../pageObjects/ViewCartPage";
import PaymentPage from "../pageObjects/PaymentPage";
import DeleteAccountPage from "../pageObjects/DeleteAccountPage";
import { generateUniqueEmail } from "../support/utils";
import { faker } from '@faker-js/faker';
import regesterUserPageData from "../fixtures/regesterUserPageData.json";
import accountCreatedPageData from "../fixtures/accountCreatedPageData.json";
import paymentPageData from "../fixtures/paymentPageData.json";
import deleteAccountPageData from "../fixtures/deleteAccountPageData.json";

describe("Payment", () => {
    const header = new Header();
    const homePage = new HomePage();
    const signupLoginPage = new SignupLoginPage();
    const viewCartPage = new ViewCartPage();
    const regesterUserPage = new RegesterUserPage();
    const accountCreatedPage = new AccountCreatedPage();
    const checkoutPage = new CheckoutPage();
    const paymentPage = new PaymentPage();
    const deleteAccountPage = new DeleteAccountPage();

  it("TC_24|Download Invoice after purchase order", () => {
    const currentName = faker.person.fullName();
    
    cy.visit("/");
    cy.url().should("include", "automationexercise");
    homePage
        .hoverOnProductById(3)
        .clickAddToCartById(3)
        .clickContinueShopping();
    header.clickViewCartIcon();
    cy.url().should("include", "/view_cart");
    viewCartPage
        .clickProceedToCheckoutBtnBeforeLogin()
        .clickRegisterLink();
    signupLoginPage
        .inputNameForSignUp(currentName)
        .inputEmailForSingup(generateUniqueEmail())
        .clickSignUpButton()
        .getAccauntInfoTitle()
        .should('be.visible')
        .and('have.text', regesterUserPageData.regesterHeaderText);
    regesterUserPage
        .checkMrsTitle()
        .inputPassword(faker.word.noun())
        .selectDayOfBirth(regesterUserPageData.newUserData.dayOfBirth)
        .selectMonthOfBirth(regesterUserPageData.newUserData.mounthOfBirth)
        .selectYearOfBirth(regesterUserPageData.newUserData.yearOfBirth)
        .checkNewsletterCheckBox()
        .checkOfferCheckBox()
        .inputFitstNameForAdress(faker.person.firstName())
        .inputLastNameForAdress(faker.person.lastName())
        .inputCompany(faker.company.name())
        .inputAddressFirstString(faker.location.streetAddress())
        .inputAddressSecondString(faker.location.secondaryAddress())
        .selectCountry(regesterUserPageData.newUserData.country)
        .inputState(faker.location.state())
        .inputCity(faker.location.city())
        .inputZipCode(faker.location.zipCode())
        .inputMobileNumber(faker.phone.number())
        .clickCreateAccountButton()
        .getAccountCreatedTitle()
        .should('be.visible')
        .and('have.text', accountCreatedPageData.accountCreatedHeaderText);
    accountCreatedPage
        .clickContinueButton()
    .header
        .getLoggedUsername()
        .should('be.visible')
        .and('have.text', accountCreatedPageData.logginAsLable + currentName);
    header.clickViewCartIcon();
    viewCartPage.clickProceedToCheckoutBtnAfterLogin();
    checkoutPage
        .inputMessage(faker.lorem.sentence())
        .clickPlaceOrderBtn();
    paymentPage
        .inputNameOnCard(currentName)
        .inputCardNumber(faker.finance.creditCardNumber())
        .inputCVC(faker.finance.creditCardCVV())
        .inputExpirationMonth(paymentPageData.month)
        .inputExpirationYear(paymentPageData.year)
        .clickPayAndConfirmBtn()
        .getSuccessMessage().should('contain.text', paymentPageData.message).and('be.visible');
    paymentPage.clickDownloadInvoiceLink();
    cy.getDownloadedFileContent('invoice.txt').should('include', 'Your total purchase amount is 1000. Thank you');
    paymentPage.clickContinueBtn();
    homePage.clickDeleteAccountLink();
    deleteAccountPage.getDeleteMessage().should('have.text', deleteAccountPageData.message);
    deleteAccountPage.clickContinueBtn();
    cy.url().should("include", "automationexercise");
  });
});
