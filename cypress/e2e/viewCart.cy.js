/// <reference types = "cypress"/>

import Header from "../pageObjects/Header";
import ProductsPage from "../pageObjects/ProductsPage";
import ViewCart from "../pageObjects/ViewCartPage";
import viewCartPageData from "../fixtures/viewCartPageData.json";

import "cypress-real-events/support";

describe("View Cart Page", () => {
  const header = new Header();
  const viewCart = new ViewCart();
  const productsPage = new ProductsPage();

  it("TC_12.1|Verify Cart is empty before shopping", () => {
    cy.visit("/");
    header.clickViewCartIcon();
    viewCart
      .getEmptyCartMessage()
      .should("be.visible")
      .and("have.text", viewCartPageData.emptyCartMessage);
  });

  it("TC_12.2|Add two different products in the cart", () => {
    cy.visit("/");
    header.clickProductsButton();
    cy.url().should("include", "/products");
    productsPage
      .hoverOnProductByIndex(0)
      .clickAddToCartById(1)
      .clickContinueShopping()
      .hoverOnProductByIndex(1)
      .clickAddToCartById(2)
      .clickViewCartLinkPopUp();
    viewCart.verifyNumberOfItemsInCart(2);
    viewCart.getCartRows().each(($row, index) => {
      const expected = viewCartPageData.addedTwoItems[index];

      viewCart.getRowProductId($row).should("equal", expected.id);
      viewCart.getProductName($row).should("have.text", expected.description);
      viewCart.getProductPrice($row).should("have.text", expected.price);
      viewCart.getProductQuantity($row).should("have.text", expected.quantity);
      viewCart
        .getProductTotalPrice($row)
        .should("have.text", expected.price_total);
    });
  });

  it("TC_11 Verify Subscription in Cart page", () => {
    cy.visit("/");
    header.clickViewCartIcon();
    viewCart.getSubscription("have.text", "Subscription");
    viewCart.inputSubscriptionEmail("test@test.com");
    viewCart.clickSubscriptionArrow();
    viewCart.getSuccessMessage(
      "have.text",
      "You have been successfully subscribed!"
    );
  });

  it("TC_12.3|Add the Same Product Multiple Times in the cart", () => {
    cy.visit("/");
    header.clickProductsButton();
    cy.url().should("include", "/products");
    cy.addProductToCartMultipleTimes(7, 8, 5);
    productsPage.clickViewCartIcon();
    
    viewCart.getCartRows().each(($row, index) => {
      const expected = viewCartPageData.addedSameItem[index];

      viewCart.getRowProductId($row).should("equal", expected.id);
      viewCart.getProductName($row).should("have.text", expected.description);
      viewCart.getProductPrice($row).should("have.text", expected.price);
      viewCart.getProductQuantity($row).should("have.text", expected.quantity);
      viewCart
        .getProductTotalPrice($row)
        .should("have.text", expected.price_total); 
    });

  });

});
