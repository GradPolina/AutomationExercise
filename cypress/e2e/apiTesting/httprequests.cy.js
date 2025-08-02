/// <reference types = "cypress"/>

describe("HTTP Requests", () => {
  it("TC API 1: Get All Products list", { tags: ["@api"] }, () => {
    cy.request("GET", "https://automationexercise.com/api/productsList")
      .its("status")
      .should("equal", 200);
  });
});
