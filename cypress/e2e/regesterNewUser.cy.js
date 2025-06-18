/// <reference types = "cypress"/>
import AccountCreatedPage from "../pageObjects/AccountCreatedPage";
import Header from "../pageObjects/Header";
import RegesterUserPage from "../pageObjects/RegesterUserPage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import { generateUniqueEmail } from "../support/utils";
import { faker } from '@faker-js/faker';
import signupLoginPageData from "../fixtures/signupLoginPageData.json";
import regesterUserPageData from "../fixtures/regesterUserPageData.json";
import accountCreatedPageData from "../fixtures/accountCreatedPageData.json"

describe("Login User", () => {
    const header = new Header();
    const signupLoginPage = new SignupLoginPage();
    const regesterUserPage = new RegesterUserPage();
    const accountCreatedPage = new AccountCreatedPage();

    beforeEach("Visit Home Page", () => {
        cy.visit('/');
    })

    afterEach("Delete created account", () => {
        cy.visit('/delete_account');
    })


    it("TC_1 | Register User", () => {
        const currentName = faker.person.fullName();
        header
            .clickSignupLoginButton()
            .getSignupTitle()
            .should('be.visible')
            .and('have.text', signupLoginPageData.signupHeaderText);

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
    })
})

