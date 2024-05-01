describe('test child windows', function () {
    // test case
    it('test child window with  remove target attribute', function (){
       // url launch
       cy.visit("https://the-internet.herokuapp.com/windows") //parent window
       // delete target attribute with invoke for link
       cy.get('.example > a')
       .invoke('removeAttr', 'target').click() //remove target element

       // verify child window url
       cy.url()
       .should('include', 'https://the-internet.herokuapp.com/windows/new')

       cy.wait(5000)
       // shift to parent window
       cy.go('back');
    });

    it('test child windows with target attribute', function (){
        // url launch
        cy.visit("https://the-internet.herokuapp.com/windows") //parent window
        
        cy.get('.example > a').each((e)=>{
            let link=e.prop("href")
            cy.visit(link)
        })
 
        // verify child window url
        cy.url()
        .should('include', 'https://the-internet.herokuapp.com/windows/new')
 
        cy.wait(5000)
        // shift to parent window
        cy.go('back');
     });
 });


