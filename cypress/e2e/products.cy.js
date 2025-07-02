/// <reference types="cypress" />
import Header from "../pageObjects/Header";
import ProductsPage from "../pageObjects/ProductsPage";

describe("Products page", () => {
  const header = new Header();
  const productsPage = new ProductsPage();

  it("TC_9 | Search product", () => {
    cy.visit("/");
    header.clickProductsButton();
    productsPage.getAllProductsListTitle().should("have.text", "All Products");
    productsPage.inputSearchValue("dress");
    productsPage.clickSearchSubmitButton();
    productsPage
      .getSearchResultsTitle()
      .should("have.text", "Searched Products");
  });
});
