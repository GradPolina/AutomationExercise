import HomePage from "./HomePage";

class AccountCreatedPage {
    getAccountCreatedTitle = () => cy.get('[data-qa="account-created"]');
    getContinueButton = () => cy.get('[data-qa="continue-button"]');

    clickContinueButton() {
        this.getContinueButton().click();
        return new HomePage();
    }
}

export default AccountCreatedPage;