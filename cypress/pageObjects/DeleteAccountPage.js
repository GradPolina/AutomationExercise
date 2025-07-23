import HomePage from "./HomePage";

class DeleteAccountPage {
 getDeleteMessage = () => cy.get(".col-sm-9 p").eq(0);
 getContinueBtn = () => cy.get("a[data-qa='continue-button']");

 clickContinueBtn() {
    this.getContinueBtn().click();
    return new HomePage();
 }
}

export default DeleteAccountPage;