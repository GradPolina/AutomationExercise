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

  it("TC API 4: PUT To All Brands List", { tags: ["@api"] }, () => {
    cy.request({
      method: "PUT",
      url: "https://automationexercise.com/api/brandsList"
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
    })
  });

   it("TC API 5: POST To Search Product", { tags:["@api"] }, () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/searchProduct",
      form: true, // send as x-www-form-urlencoded
      body: {search_product: "tshirt"}
    }).then((response) => {
      expect(response.status).to.eq(200);
      const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
      expect(responseBody).to.have.property("responseCode");
      expect(responseBody).to.have.property("products");
      expect(responseBody.products).to.be.an("array");
      expect(responseBody.responseCode).to.eq(200);
      expect(responseBody.products.length).to.be.greaterThan(0);
      const hasTshirt = responseBody.products.some(product =>
        product.name.toLowerCase().includes("tshirt")
      );
      expect(hasTshirt).to.be.true;
      responseBody.products.forEach(product => {
        expect(product).to.have.all.keys("id", "name", "price", "brand", "category");
      });
      expect(response.headers).to.have.property("content-type");
      expect(response.headers["content-type"]).to.include('text/html');
      expect(response.duration).lessThan(1500);
     }); 
  });
});
