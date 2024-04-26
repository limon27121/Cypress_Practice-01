

describe('Text Presence Test', () => {
    it.skip('Checks if specific text is present on the application', () => {

      // Visit the application URL
      cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx');
  
      // Use Cypress contains() command to check if specific text is present
      cy.contains('Login').should('be.visible');
      
    });


    describe('URL Test', () => {
        it.skip('Checks if the correct URL is loaded', () => {
          // Visit the application URL
          cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx');
      
          // Verify the current URL
          cy.url().should('eq', 'https://ucam.uiu.ac.bd/Security/LogIn.aspx');
        });
      });


      describe('Title Test', () => {
        it.skip('Checks if the correct title is displayed', () => {
          // Visit the application URL
          cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx');
      
          // Verify the title of the website
          cy.title().should('eq', 'UIU EMS LogIn');
        });
      });
      

      describe('Element Visibility Test', () => {
        it.skip('Checks if the logo is visible on the website', () => {
          // Visit the application URL
          cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx');
      
          // Check if the logo element is visible
          cy.get('.col-md-12').should('be.visible');
          // Replace 'img.logo' with the appropriate CSS selector for your logo element
      
         
        });
      });
      

      describe('Placeholder Text Test', () => {
        it('Checks if the placeholder text is correct', () => {
          // Visit the application URL
          cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx');
      
          // Check the placeholder text of the input field of login id
          cy.get('#logMain_UserName').invoke('attr', 'placeholder').should('eq', 'Enter your Login Id/username');

          cy.get('#logMain_Password').invoke('attr', 'placeholder').should('eq', 'Enter your password');
         
        });
      });
      

      
      
      

  });
  