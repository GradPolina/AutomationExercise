import PaymentPage from "./PaymentPage";

class CheckoutPage {
    getTextAreaInput = () => cy.get("textarea[name='message']");
    getPlaceOrderBtn = () => cy.get(".btn.check_out");

    inputMessage(message) {
        this.getTextAreaInput().type(message);
        return this;
    }

    clickPlaceOrderBtn() {
        this.getPlaceOrderBtn().click();
        return new PaymentPage();
    }
}

export default CheckoutPage;
