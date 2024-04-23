describe('Check log in functionality', () => {
    it('should accept input of a specific type', () => {
      // Visit the page with the input box
      cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx')

  
      // Type a value into the input box
      
      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_UserName').should("have.value","011171060")

      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Password').should("have.value","2353")

      cy.get('#logMain_Button1').click()

      
      cy.wait(3000) // Adjust the time as needed
      it("test the header part after log in ",()=>{
        cy.get('[alt="Image"]').should('be.visible')
        cy.get('[alt="Image"]').should('have.attr', 'src', '/Images/BannerLogo.gif')
        cy.get('.semesterStatusLabel').contains("Current→")
        cy.get('.semesterStatus').contains("241 - Spring 2024 (Semester), 241 - Spring 2024 (Trimester)")
        cy.get('.loginStyle').contains("011171060")
        cy.get('.logoutStyle').contains("Logout")
        })
        it("test the navbar header",()=>{
          cy.get('.navbar-header ul.staticHome').should('have.length', 3)
    
          cy.get('.navbar-header ul.staticHome li').contains("Home")
          cy.get('.navbar-header ul.staticHome li').contains("IQAC")
          cy.get('.navbar-header ul.staticHome li').contains("OBE")
    
         })
         
      it("test the navbar-collapse",()=>{
        cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static').should('have.length', 5)
        cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static a.level1.static').contains("Student Accounts")
        cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static a.level1.static').contains("Transport Registration")
        cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static a.level1.static').contains("COE")
        cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static a.level1.static').contains("Admin Control")
        cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static a.level1.static').contains("Registration")
      })
      
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
  


  // describe('List Item Header Test', () => {
  //   it('Checks if "Student Accounts" is visible', () => {
  //     // Visit the page with the provided HTML
  //     cy.visit('https://ucam.uiu.ac.bd/Security/StudentHome.aspx?mmi=41485d2c6c554d494e63');
  
  //     // Get the list item containing the anchor with text "Student Accounts"
    
  //   });
  // });
  