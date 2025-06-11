/// <reference types="cypress" />
import Header from "../pageObjects/Header";
import ProductsPage from "../pageObjects/ProductsPage";
import ProductDetailsPage from "../pageObjects/ProductDetailsPage";

describe("Products page", () => {
  const header = new Header();
  const productsPage = new ProductsPage();
  const productDetailsPage = new ProductDetailsPage();

  it("TC_8 | Verify All Products and product detail page", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    header.clickProductsButton();
    productsPage.getAllProductsListTitle().should("have.text", "All Products");
    productsPage.getProductslist().should("be.visible");
    productsPage.clickViewproduct1();
    productDetailsPage.getProductTitle().should("be.visible");
    productDetailsPage.getProductCategory().should("be.visible");
    productDetailsPage.getProductVisibility().should("be.visible");
    productDetailsPage.getProductCondition().should("be.visible");
    productDetailsPage.getProductPrice().should("be.visible");
  });

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
