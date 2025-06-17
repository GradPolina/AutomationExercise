import ProductDetailsPage from "./ProductDetailsPage";

class ProductsPage {
  getAllProductsListTitle = () => cy.get(".features_items >.title");
  getProductslist = () => cy.get(".features_items");
  getProductViewProduct1 = () => cy.get('a[href="/product_details/1"]');
  getSearch = () => cy.get("#search_product");
  getSearchSubmitButton = () => cy.get("#submit_search");
  getSearchResultsTitle = () => cy.get("h2.title");

  clickViewproduct1() {
    this.getProductViewProduct1().click();
    return new ProductDetailsPage();
  }

  clickSearchSubmitButton() {
    this.getSearchSubmitButton().click();
    return this;
  }

  inputSearchValue(text) {
    this.getSearch().type(text);
    return this;
  }
}

export default ProductsPage;
