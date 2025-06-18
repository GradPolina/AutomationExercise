import AccountCreatedPage from "./AccountCreatedPage";

class RegesterUserPage {
    getAccauntInfoTitle = () => cy.get(".login-form > h2");

    getMrTitle = () => cy.get("#id_gender1");
    getMrsTitle = () => cy.get("#id_gender2");

    getPasswordField = () => cy.get('[data-qa="password"]');

    getDayOfBirthDropDown = () => cy.get('[data-qa="days"]');
    getMonthOfBirthDropDown = () => cy.get('[data-qa="months"]');
    getYearOfBirthDropDown = () => cy.get('[data-qa="years"]');

    getNewsletterCheckBox = () => cy.get('#newsletter');
    getOffersCheckBox = () => cy.get('#optin');

    getFirstNameForAdressField = () => cy.get('input[data-qa="first_name"]');
    getLastNameForAdressField = () => cy.get('input[data-qa="last_name"]');
    getCompanyField = () => cy.get('input[data-qa="company"]');
    getAdress1Field = () => cy.get('input[data-qa="address"]');
    getAdress2Field = () => cy.get('input[data-qa="address2"]');
    getCountryDropBox = () => cy.get('[data-qa="country"]');
    getStateField = () => cy.get('input[data-qa="state"]');
    getCityField = () => cy.get('input[data-qa="city"]');
    getZipCodeField = () => cy.get('input[data-qa="zipcode"]');
    getMobileNumberField = () => cy.get('input[data-qa="mobile_number"]');

    getCreateAccountButton = () => cy.get('[data-qa="create-account"]');

    checkMrTitle() {
        this.getMrTitle().check();
        return this
    }

    checkMrsTitle() {
        this.getMrsTitle().check();
        return this
    }

    inputPassword(password) {
        this.getPasswordField().type(password);
        return this;
    }

    selectDayOfBirth(day) {
        this.getDayOfBirthDropDown().select(day);
        return this;
    }

    selectMonthOfBirth(mount) {
        this.getMonthOfBirthDropDown().select(mount);
        return this;
    }

    selectYearOfBirth(year) {
        this.getYearOfBirthDropDown().select(year);
        return this;
    }

    checkNewsletterCheckBox() {
        this.getNewsletterCheckBox().check();
        return this;
    }

    checkOfferCheckBox() {
        this.getOffersCheckBox().check();
        return this;
    }

    inputFitstNameForAdress(firstName) {
        this.getFirstNameForAdressField().type(firstName);
        return this;
    }

    inputLastNameForAdress(lastName) {
        this.getLastNameForAdressField().type(lastName);
        return this;
    }

    inputCompany(companyName) {
        this.getCompanyField().type(companyName);
        return this;
    }

    inputAddressFirstString(addressFirst) {
        this.getAdress1Field().type(addressFirst);
        return this;
    }

    inputAddressSecondString(addressSecond) {
        this.getAdress2Field().type(addressSecond);
        return this;
    }

    selectCountry(country) {
        this.getCountryDropBox().select(country);
        return this;
    }

    inputState(state) {
        this.getStateField().type(state);
        return this;
    }

    inputCity(city) {
        this.getCityField().type(city);
        return this;
    }

    inputZipCode(zipCode) {
        this.getZipCodeField().type(zipCode);
        return this;
    }

    inputMobileNumber(mobile) {
        this.getMobileNumberField().type(mobile);
        return this;
    }

    clickCreateAccountButton() {
        this.getCreateAccountButton().click();
        return new AccountCreatedPage();
    }
}

export default RegesterUserPage;