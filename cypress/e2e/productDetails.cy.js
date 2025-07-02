/// <reference types="cypress" />
import Header from "../pageObjects/Header";
import ProductsPage from "../pageObjects/ProductsPage";
import ProductDetailsPage from "../pageObjects/ProductDetailsPage";
import { faker } from "@faker-js/faker";

describe("Product Details page", () => {
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

  it("TC_21 | Add review on product", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    header.clickProductsButton();
    productsPage.getAllProductsListTitle().should("have.text", "All Products");
    productsPage.getProductslist().should("be.visible");
    productsPage.clickViewproduct1();
    productDetailsPage.getWriteReview().should("be.visible");
    productDetailsPage.inputReviewName(faker.person.firstName());
    productDetailsPage.inputReviewEmail(faker.internet.email());
    productDetailsPage.inputReviewTextArea(faker.lorem.sentence());
    productDetailsPage.clickReviewSubmitButton();
    productDetailsPage.getThankMessage().should("be.visible");
  });
});
