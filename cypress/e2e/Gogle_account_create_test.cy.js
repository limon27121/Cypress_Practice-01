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
    it.only('Scenario 1', function (){
       // test step to launch a URL
       cy.visit("https://accounts.google.com/signup")
   
       cy.get('#firstName').clear().type('MD.Moontaser Alam');
       cy.get('#lastName').clear().type('Limon');
       cy.get(".VfPpkd-vQzf8d").click()

       //basic information section is tested 

       cy.wait(2000);
         //select dropdown of month
       cy.get('#month').select('November');
         //type day and year  in input box
       cy.get("#day").type("22")
       cy.get("#year").type("1995")
         //select gender from the dropdown
       cy.get("#gender").select("Male")
       cy.get(".VfPpkd-vQzf8d").click()

   
        //Choose your gmail address section is tested 

         cy.wait(5000); 
      
         //select the radio button any of 1 option
          cy.get(':nth-child(1) > .QTJzre > .uxXgMe > .zJKIV > .SCWude > .t5nRo').click()
   
          cy.get('#next > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({ force: true });


         //create a strong password section is tested

         cy.wait(1000);
         //type password in password field
         cy.get('#passwd > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type("limon011171060..")
         cy.get("[name='PasswdAgain']").type("limon011171060..")
      
          //checked the checkbox field
         cy.get("[type='checkbox'").check()
      
          //click the next button which is display none use force attribute 
         cy.get('.VfPpkd-RLmnJb').click({ force: true })


         //confrim you are not robot section tested

         cy.get('#phoneNumberId').type("01623692274")
         cy.get('.VfPpkd-RLmnJb').click({ force: true })

        //enter your code section tested
      //   cy.get('.OabDMe').type("G-662273", { force: true });


//   it("seen 5",()=>{
//    cy.wait(1000) 
//     
//   })
   
   
       

    //    cy.get('input[type="checkbox"]').check().should('be.checked')
    //    //identify checkbox with class with assertion
    //    cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck().should('not.be.checked')
    })
 })