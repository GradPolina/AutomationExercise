/// <reference types = "cypress"/>

import Header from "../pageObjects/Header";
import ProductsPage from "../pageObjects/ProductsPage";
import ViewCartPage from "../pageObjects/ViewCartPage";
import HomePage from "../pageObjects/HomePage";
import ProductDetailsPage from "../pageObjects/ProductDetailsPage";
import viewCartPageData from "../fixtures/viewCartPageData.json";
import "cypress-real-events/support";

describe("View Cart Page", () => {
  const header = new Header();
  const viewCartPage = new ViewCartPage();
  const productsPage = new ProductsPage();
  const homePage = new HomePage();
  const productDetailsPage = new ProductDetailsPage();

  it("TC_12.1|Verify Cart is empty before shopping", () => {
    cy.visit("/");
    header.clickViewCartIcon();
    viewCartPage
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
    viewCartPage.verifyNumberOfItemsInCart(2);
    viewCartPage.getCartRows().each(($row, index) => {
      const expected = viewCartPageData.addedTwoItems[index];

      viewCartPage.getRowProductId($row).should("equal", expected.id);
      viewCartPage
        .getProductName($row)
        .should("have.text", expected.description);
      viewCartPage.getProductPrice($row).should("have.text", expected.price);
      viewCartPage
        .getProductQuantity($row)
        .should("have.text", expected.quantity);
      viewCartPage
        .getProductTotalPrice($row)
        .should("have.text", expected.price_total);
    });
  });

  it("TC_11 Verify Subscription in Cart page", () => {
    cy.visit("/");
    header.clickViewCartIcon();
    viewCartPage.getSubscription("have.text", "Subscription");
    viewCartPage.inputSubscriptionEmail("test@test.com");
    viewCartPage.clickSubscriptionArrow();
    viewCartPage.getSuccessMessage(
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

    viewCartPage.getCartRows().each(($row, index) => {
      const expected = viewCartPageData.addedSameItem[index];

      viewCartPage.getRowProductId($row).should("equal", expected.id);
      viewCartPage
        .getProductName($row)
        .should("have.text", expected.description);
      viewCartPage.getProductPrice($row).should("have.text", expected.price);
      viewCartPage
        .getProductQuantity($row)
        .should("have.text", expected.quantity);
      viewCartPage
        .getProductTotalPrice($row)
        .should("have.text", expected.price_total);
    });
  });

  it("TC 13 Verify Product quantity in Cart", () => {
    cy.visit("/");
    homePage.clickViewProductButton(1);
    cy.url().should("include", "/product_details/1");
    productDetailsPage
      .inputQuantity("4")
      .clickAddToCartButton()
      .clickViewCartLink();
    viewCartPage.getProductCount().should("have.text", "4");
  });

  it("TC_17|Remove Products From Cart", () => {
    cy.visit("/");
    homePage
      .hoverOnProductByIndex(3)
      .clickAddToCartById(4)
      .clickContinueShopping();
    header.clickViewCartIcon();
    cy.url().should("include", "/view_cart");
    viewCartPage
      .removeProductById(4)
      .getEmptyCartMessage()
      .should("be.visible")
      .and("have.text", viewCartPageData.emptyCartMessage);
    viewCartPage
      .getCartItemRowById(4)
      .should("not.exist");
  })
});
