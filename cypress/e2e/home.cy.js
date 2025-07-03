/// <reference types = "cypress"/>

import HomePage from "../pageObjects/HomePage";
import homePageData from "../fixtures/homePageData.json"

describe("Home", () => {
  const home = new HomePage();

  it("TC_10 Verify Subscription in home page", () => {
    cy.visit("/");
    home.getSubscription("have.text", "Subscription");
    home.inputSubscriptionEmail("test@test.com");
    home.clickSubscriptionArrow();
    home.getSuccessMessage(
      "have.text",
      "You have been successfully subscribed!"
    );
  });

  it("TC_25|Verify Scroll Up using 'Arrow' button and Scroll Down functionality", {tags: ['@smoke']}, () => {
    cy.visit("/");
    cy.url().should("include", "automationexercise");
    cy.scrollTo('bottom');
    home.getSubscription().should("be.visible");
    home.clickArrowButton();
    home.getCarouselHeader().should("be.visible").and("have.text", homePageData.carouselHeader);
  })
});
