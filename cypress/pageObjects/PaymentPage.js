import HomePage from "./HomePage";

class PaymentPage {
    getNameOnCard = () => cy.get("input[name='name_on_card']");
    getCardNumber = () => cy.get("input[name='card_number']");
    getCVC = () => cy.get(".card-cvc");
    getExpirationMonth = () => cy.get(".card-expiry-month");
    getExpirationYear = () => cy.get(".card-expiry-year");
    getPayAndConfirmBtn = () => cy.get("#submit");
    getSuccessMessage = () => cy.get(".col-sm-9").eq(0);
    getDownloadInvoiceLink = () => cy.get(".check_out");
    getContinueBtn = () => cy.get("a[data-qa='continue-button']");

    inputNameOnCard(message) {
        this.getNameOnCard().clear().type(message);
        return this;
    }

    inputCardNumber(data) {
        this.getCardNumber().clear().type(data);
        return this;
    }

    inputCVC(data) {
        this.getCVC().clear().type(data);
        return this;
    }

    inputExpirationMonth(data) {
        this.getExpirationMonth().clear().type(data);
        return this;
    }

    inputExpirationYear(data) {
        this.getExpirationYear().clear().type(data);
        return this;
    }

    clickPayAndConfirmBtn() {
        this.getPayAndConfirmBtn().click();
        return this;
    }

    clickDownloadInvoiceLink() {
        this.getDownloadInvoiceLink().click();
        return this;
    }

    clickContinueBtn() {
        this.getContinueBtn().click();
        return new HomePage();
    }
}

export default PaymentPage;
