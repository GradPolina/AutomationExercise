import Header from "./Header";

class LoginToYourAccount {
    getLoginToYourAccountTitle = () => cy.get('.login-form h2');
    getEmailAddressField = () => cy.get('.login-form input[type="email"]');
    getPasswordField = () => cy.get('input[type="password"]');
    getLoginButton = () => cy.get('.login-form button[type="submit"]');
    getErrorMessageIncorectCredentials = () => cy.get('.login-form p');

inputEmailAddressField(value){
    this.getEmailAddressField().type(value);
    return this;
}
inputPasswordField(value){
    this.getPasswordField().type(value);
    return this;
}
clickLoginButton(){
    this.getLoginButton().click();
    return new Header();
}

}


export default LoginToYourAccount;