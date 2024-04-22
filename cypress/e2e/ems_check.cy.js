describe('Input Box Test', () => {
    it('should accept input of a specific type', () => {
      // Visit the page with the input box
      cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx')
  
      // Type a value into the input box
      
      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(3000) // Adjust the time as needed

      cy.get('[alt="Image"]').should('be.visible')
      cy.get('[alt="Image"]').should('have.attr', 'src', '/Images/BannerLogo.gif')
    cy.get('.semesterStatusLabel').contains("Current→")
    cy.get('.semesterStatus').contains("241 - Spring 2024 (Semester), 241 - Spring 2024 (Trimester)")
    cy.get('.loginStyle').contains("011171060")
    cy.get('.logoutStyle').contains("Logout")

    cy.get('.navbar-header ul.staticHome').should('have.length', 3)
    })
  })
  

  describe('URL Test', () => {
    it('should check if the URL is correct', () => {
      const expectedURL = 'https://ucam.uiu.ac.bd/Security/LogIn.aspx'
      
      // Visit the expected URL
      cy.visit(expectedURL)
  
      // Assert that the current URL matches the expected URL
      cy.url().should('eq', expectedURL)

      const expectedTitle = 'UIU EMS LogIn'
      cy.title().should('include', expectedTitle)

    
    })
  })
  

  describe('Logo Availability Test', () => {
    it('should check if the logo is available', () => {
      cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx')
  
      // Check if the logo image exists and is visible
      cy.get('img[src="../Images/uiu_logo_update.png"]').should('be.visible')
    })
  })
  