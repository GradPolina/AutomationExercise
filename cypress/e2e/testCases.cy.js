/// <reference types="cypress" />
import Header from "../pageObjects/Header";
import TestCases from "../pageObjects/TestCasesPage";

describe("Test Cases Page", ()=>{
    const header = new Header();
    const testCases = new TestCases();

    it('TC_7|Verify Test Cases Page', ()=>{
        cy.visit('/');
        header.clickTestCasesButton()
        testCases.getTestCaseTitle().should('have.text', 'Test Cases');
    });

});