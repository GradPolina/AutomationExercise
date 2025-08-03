/// <reference types = "cypress"/>

describe("API testing", () => {
  it("TC API 1: Get All Products list", { tags: ["@api"] }, () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
    }).then((response) => {
      cy.log(JSON.stringify(response.body.products));
      expect(response.status).to.eq(200);
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.have.property("products");
      expect(responseBody.products).to.be.an("array");

      if (responseBody.length > 0) {
        const firstProduct = responseBody.products[0];
        expect(firstProduct).to.have.property("id");
        expect(firstProduct).to.have.property("name");
        expect(firstProduct).to.have.property("price");
        expect(firstProduct).to.have.property("brand");
      }
    });
  });
});
