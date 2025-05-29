import SignupLoginPage from "./SignupLoginPage";

class Header {
    getSignupLoginButton = () => cy.get('a[href="/login"]');
    
    clickSignupLoginButton(){
        this.getSignupLoginButton().click();
        return new SignupLoginPage();
    }

}

export default Header;