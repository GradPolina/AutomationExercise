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
  
  it("TC API 2: POST To All Products List", { tags: ["@api"] }, () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/productsList',
    }).then((response) => {
      expect(response.status).to.eq(200);
      const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
      expect(responseBody).to.have.property("responseCode");
      expect(responseBody).to.have.property("message");
      expect(responseBody.message).to.be.a('string');
      expect(responseBody.responseCode).to.eql(405); 
      expect(responseBody.message).to.eql("This request method is not supported.");
      expect(response.headers).to.have.property("content-type");
      expect(response.headers["content-type"]).to.include('text/html');
      expect(response.duration).lessThan(1000);
    });
  });
});
