

describe('My First Test', () => {
    it(' check search key functionality ', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("input.search-keyword").type("ca");
        cy.get(".products").find(".product").should("have.length",4)
        cy.contains('.product-name', 'Cauliflower - 1 Kg').should('exist');
        cy.get(':nth-child(1) > .product-action > button').should("exist")
        //using cypress browser css selector
        cy.get(':nth-child(1) > .product-action > button').click()
        //using main browser css selector
        cy.get(".products").find(".product").eq("1").contains("ADD TO CART").click()
    })
  })



describe("check functionality using loop",()=>{
    it("find text dynamically and add to cart",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("input.search-keyword").type("ca");
        cy.get(".products").find(".product").each(($el, index, $list)=>{
            var element=$el.find("h4.product-name").text()
            if(element.includes("Cashews")){
                $el.find("button").click();
            }

        })
    })

    it("Check if specified products are available or visible", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get("input.search-keyword").type("ca");
          // Check if each specified product is visible
        cy.get('.products .product').each(($product) => {
            const productName = $product.find('.product-name').text();
       
            if (productName.includes('Cauliflower - 1 Kg') ||
                productName.includes('Carrot - 1 Kg') ||
                productName.includes('Capsicum') ||
                productName.includes('Cashews - 1 Kg')) {
                expect($product).to.be.visible;
            }
        });
    });
    
})
  
