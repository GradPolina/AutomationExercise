/// <reference types = "cypress"/>

import Header from "../pageObjects/Header";
import ViewCart from "../pageObjects/ViewCartPage";
import viewCartPageData from "../fixtures/viewCartPageData.json";

describe("View Cart Page", ()=>{
    const header = new Header();
    const viewCart = new ViewCart();

    it('TC_12.1|Verify Cart is empty before shopping', ()=>{
        cy.visit('/');
        header.clickViewCartIcon();
        viewCart.getEmptyCartMessage()
            .should('be.visible')
            .and('have.text', viewCartPageData.emptyCartMessage);
    });

});
