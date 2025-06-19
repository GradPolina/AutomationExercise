/// <reference types = "cypress"/>

import HomePage from "../pageObjects/HomePage";

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
});
