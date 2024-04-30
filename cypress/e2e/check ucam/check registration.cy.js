describe('check_registration', () => {
    it('check registration header', () => {
        var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
        cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(3000) 

      cy.get(':nth-child(5) > .level1').click()
      cy.wait(3000)

      cy.get('.staticHome a#ctl00_A1').contains("Home")
      cy.get('.staticHome a#ctl00_lbtnIQAC').contains("IQAC")
      cy.get(".navbar-toggle").should("exist");
      
       // Check if Course Evaluation is present
      cy.get('ul.level1.nav.navbar-nav.static')
      .contains('Course Evaluation')
      .should('exist');

      //check dropdown list for course evaluation
      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Evaluation Form')
      .should('exist');

    // Check if Registration is present
    cy.get('ul.level1.nav.navbar-nav.static')
      .contains('Registration')
      .should('exist');

        //check dropdown list for registration process

      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Section Selection & Registration New')
      .should('exist');
      
      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Course Withdraw Request (New)')
      .should('exist');
      
      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Pre Advising (New Course)')
      .should('exist');

      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Pre-Advising (Retake Course)')
      .should('exist');



    // Check if My Account is present
    cy.get('ul.level1.nav.navbar-nav.static')
      .contains('My Account')
      .should('exist');

        //check dropdown list for My_account process
      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Change Password')
      .should('exist');

    // Check if My View is present
    cy.get('ul.level1.nav.navbar-nav.static')
      .contains('My View')
      .should('exist');

    //check dropdown list for My_view process

      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('Result History')
      .should('exist');

      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('My Class Routine')
      .should('exist');

      cy.get('ul.level2.dropdown-menu.dynamic')
      .contains('My Class Routine')
      .should('exist');
    })
  })



  describe('My First Test', () => {
    it.only('Does not do much!', () => {
        var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
        cy.visit(expected_link);
    
        cy.get('#logMain_UserName').type("011171060")
        cy.get('#logMain_Password').type("2353")
        cy.get('#logMain_Button1').click()
        cy.wait(3000) 
  
        cy.get(':nth-child(5) > .level1').click()
        cy.wait(3000)
    //  cy.get("container-fluid").should("exist")
    cy.get('li.dropdown')
    .contains('Course Evaluation')
    .click();

  // After clicking on the Course Evaluation, you may need to wait for the dropdown menu to appear
  // Then, you can click on the Evaluation Form link inside the dropdown menu
  cy.get('ul.level2.dropdown-menu.dynamic')
    .contains('Evaluation Form')
    .click();
    })
  })