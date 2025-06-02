/// <reference types="cypress" />
import Header from "../pageObjects/Header";
import ProductsPage from "../pageObjects/ProductsPage";
import ProductPage from "../pageObjects/ProductPage";

describe("Products page", ()=>{
    const header = new Header();
    const productsPage = new ProductsPage();
    const productPage = new ProductPage();

    it('TC_8|Verify All Products and product detail page', ()=>{
        cy.visit('/');
        header.clickProductsButton()
        productsPage.getAllProductsListTitle().should("have.text", "All Products")
        productsPage.getProductslist().should("be.visible")
        productsPage.clickViewproduct1();
        productPage.getProductTitle().should("be.visible")
        productPage.getProductCategory().should("be.visible")
        productPage.getProductVisibility().should("be.visible")
        productPage.getProductCondition().should("be.visible")
        productPage.getProductPrice().should("be.visible")
        })
})