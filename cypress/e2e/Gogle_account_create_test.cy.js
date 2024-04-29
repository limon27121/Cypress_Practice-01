import debounce from 'lodash/debounce';

// Create a debounced version of the resize handler
const debouncedResizeHandler = debounce(() => {
  // Your resize handling logic here
  console.log('Resizing...');
}, 100); // Adjust the debounce delay as needed (e.g., 100 milliseconds)

// Attach the debounced resize handler to the window resize event
window.addEventListener('resize', debouncedResizeHandler);


describe('Test Goggle account functionality', function () {
    // it function to identify test
    it('Scenario 1', function (){
       // test step to launch a URL
       cy.visit("https://accounts.google.com/signup")
   
       cy.get('#firstName').clear().type('MD.Moontaser Alam');
       cy.get('#lastName').clear().type('Limon');
       cy.get(".VfPpkd-vQzf8d").click()

       cy.wait(2000);
       cy.get('#month').select('November');
       cy.get("#day").type("22")
       cy.get("#year").type("1995")
       cy.get("#gender").select("Male")
       cy.get(".VfPpkd-vQzf8d").click()

       cy.wait(5000); 

       cy.get(':nth-child(1) > .QTJzre > .uxXgMe > .zJKIV > .SCWude > .t5nRo').click()

       cy.get('#next > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({ force: true });

    
    cy.wait(1000);

    cy.get('#passwd > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type("limon011171060..")
    cy.get("[name='PasswdAgain']").type("limon011171060..")
    cy.get("[type='checkbox'").check()
   //  cy.get(".VfPpkd-vQzf8d").click()
   cy.get('.VfPpkd-RLmnJb').click({ force: true })

    cy.wait(1000) 
    cy.get('#phoneNumberId').type("01623692274")
    cy.get('.VfPpkd-RLmnJb').click({ force: true })

       

    //    cy.get('input[type="checkbox"]').check().should('be.checked')
    //    //identify checkbox with class with assertion
    //    cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck().should('not.be.checked')
    })
 })