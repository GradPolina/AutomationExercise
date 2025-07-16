/// <reference types = "cypress"/>

import ContactUsPage from "../pageObjects/ContactUsPage";
import Header from "../pageObjects/Header";
import contactUsPageData from "../fixtures/contactUsPageData.json";
import { faker } from "@faker-js/faker";

describe("Contact Us", () => {
  const header = new Header();
  const contactUsPage = new ContactUsPage();

  it("TC_6 | Contact Us Form", { tags: ["@e2e"] }, () => {
    cy.visit("/");
    header.clickContactUsButton();
    contactUsPage.inputName(faker.person.fullName());
    contactUsPage.inputEmail(faker.internet.email());
    contactUsPage.inputSubject(faker.lorem.word());
    contactUsPage.inputMessage(faker.lorem.sentence());
    contactUsPage.uploadFile("cypress/fixtures/images/upArray.png");
    cy.on("window:confirm", () => true);
    contactUsPage.clickSubmitButton();
    contactUsPage
      .getAlertSuccessMessage()
      .should("have.text", contactUsPageData.successMessage);
    contactUsPage.clickBackHomeButton();
    cy.url().should("eq", Cypress.config("baseUrl"));
  });
});
