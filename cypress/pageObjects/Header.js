import SignupLoginPage from "./SignupLoginPage";
import TestCasesPage from "./TestCasesPage";

class Header {
    getSignupLoginButton = () => cy.get('a[href="/login"]');
    getTestCasesButton =() =>cy.get('header a[href="/test_cases"]');
    
    clickSignupLoginButton(){
        this.getSignupLoginButton().click();
        return new SignupLoginPage();
    }
    
    clickTestCasesButton(){
        this.getTestCasesButton().click();
        return new TestCasesPage();
    }

}

export default Header;