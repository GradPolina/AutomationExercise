import Header from "./Header";

class SignupLoginPage extends Header {
    getLoginToYourAccountTitle = () => cy.get('.login-form h2');   
}

export default SignupLoginPage;