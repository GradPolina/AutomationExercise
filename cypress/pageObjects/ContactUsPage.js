import HomePage from "./HomePage";

class ContactUsPage {
  getNameInput = () => cy.get('[data-qa="name"]');
  getEmailInput = () => cy.get('[data-qa="email"]');
  getSubjectInput = () => cy.get('[data-qa="subject"]');
  getMessageInput = () => cy.get('[data-qa="message"]');
  getChooseFileButton = () => cy.get('[name="upload_file"]');
  getSubmitButton = () => cy.get('[data-qa="submit-button"]');
  getAlertSuccessMessage = () => cy.get(".contact-form .alert-success");
  getBackHomeButton = () => cy.get("#form-section a");

  inputName(name) {
    this.getNameInput().type(name);
    return this;
  }

  inputEmail(email) {
    this.getEmailInput().type(email);
    return this;
  }

  inputSubject(subject) {
    this.getSubjectInput().type(subject);
    return this;
  }

  inputMessage(message) {
    this.getMessageInput(message);
    return this;
  }

  uploadFile(path) {
    this.getChooseFileButton().selectFile(path);
    return this;
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }

  clickBackHomeButton() {
    this.getBackHomeButton().click();
    return new HomePage();
  }
}

export default ContactUsPage;
