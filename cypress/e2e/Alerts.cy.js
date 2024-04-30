
//js alert when we have some text with ok button

describe('js alert  Test', function () {
    // test case
    it('alert with some text with ok button', function (){
       // launch url
       cy.visit("https://register.rediff.com/register/register.php");
       // click submit
       cy.get('input[type="submit"]').click();
       // fire event with method on
       cy.on('window:alert',(t)=>{
          //assertions
          expect(t).to.contains('Your full name');
       })
    });
 });


 describe('JavaScript Alerts Test', () => {
    it('s alert when we have some text with ok button', () => {
      // Visit the page containing the buttons
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Click the button for JS Alert
      cy.get('button').contains('Click for JS Alert').click();
  
      // Verify that the alert is displayed
      cy.on('window:alert', (str) => {
        // Assert the alert message
        expect(str).to.equal('I am a JS Alert');
      });

      cy.get("#result").contains("You successfully clicked an alert")
    });
  });
  



// js alert when we have some text with ok  and cancel button
  describe('confirm alert test Test', function () {
    // test case
    it("js confrim alert when we click the ok button", function () {
       //URL launched
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       //fire confirm browser event and accept
       cy.get('button').contains("Click for JS Confirm").click()

       cy.on("window:confirm", (t) => {
          //verify text on pop-up
          expect(t).to.equal("I am a JS Confirm");
       });
       // verify application message on Cancel button click
       cy.get('#result').should('have.text', 'You clicked: Ok')
    });
    it("js confirm alert when we click the cancel button", function () {
      // URL launched
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      //fire confirm browser event and accept
      cy.get('button').contains("Click for JS Confirm").click()

      cy.on("window:confirm", (s) => {
        //verify text on pop-up
        expect(s).to.equal("I am a JS Confirm");
         return false;
      });
      
      // verify application message on Cancel button click
      cy.get('#result').should('have.text', 'You clicked: Cancel')
   });
 });


 




 //js alert with some text with input box which take user input and test the alert
 describe('Prompt Alert Test', () => {
   it('displays text entered in prompt in a paragraph tag', () => {
     // Visit the page
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
 
     // Stubbing the window.prompt method to return a fixed value
     cy.window().then(win => {
       cy.stub(win, 'prompt').returns('Cypress Test Text');
     });
 
     // Click the button to trigger the prompt
     cy.contains('button', 'Click for JS Prompt').click();
 
     // Verify that the text entered in the prompt is displayed in the paragraph tag
     cy.get('p#result').should('have.text', 'You entered: Cypress Test Text');
   });

    
   it('displays "null" in paragraph tag if prompt is canceled', () => {
     // Visit the page
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
 
     // Stubbing the window.prompt method to return null
     cy.window().then(win => {
       cy.stub(win, 'prompt').returns(null);
     });
 
     // Click the button to trigger the prompt
     cy.contains('button', 'Click for JS Prompt').click();
 
     // Verify that "null" is displayed in the paragraph tag
     cy.get('p#result').should('have.text', 'You entered: null');
   });
 });
 