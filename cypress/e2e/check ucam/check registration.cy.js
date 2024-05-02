// describe('check_registration', () => {
//     it('check registration header', () => {
//         var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
//         cy.visit(expected_link);

//       cy.get('#logMain_UserName').type("011171060")
//       cy.get('#logMain_Password').type("2353")
//       cy.get('#logMain_Button1').click()
//       cy.wait(3000) 

//       cy.get(':nth-child(5) > .level1').click()
//       cy.wait(3000)

//       cy.get('.staticHome a#ctl00_A1').contains("Home")
//       cy.get('.staticHome a#ctl00_lbtnIQAC').contains("IQAC")
//       cy.get(".navbar-toggle").should("exist");
      
//        // Check if Course Evaluation is present
//       cy.get('ul.level1.nav.navbar-nav.static')
//       .contains('Course Evaluation')
//       .should('exist');

//       //check dropdown list for course evaluation
//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Evaluation Form')
//       .should('exist');

//     // Check if Registration is present
//     cy.get('ul.level1.nav.navbar-nav.static')
//       .contains('Registration')
//       .should('exist');

//         //check dropdown list for registration process

//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Section Selection & Registration New')
//       .should('exist');
      
//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Course Withdraw Request (New)')
//       .should('exist');
      
//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Pre Advising (New Course)')
//       .should('exist');

//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Pre-Advising (Retake Course)')
//       .should('exist');



//     // Check if My Account is present
//     cy.get('ul.level1.nav.navbar-nav.static')
//       .contains('My Account')
//       .should('exist');

//         //check dropdown list for My_account process
//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Change Password')
//       .should('exist');

//     // Check if My View is present
//     cy.get('ul.level1.nav.navbar-nav.static')
//       .contains('My View')
//       .should('exist');

//     //check dropdown list for My_view process

//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('Result History')
//       .should('exist');

//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('My Class Routine')
//       .should('exist');

//       cy.get('ul.level2.dropdown-menu.dynamic')
//       .contains('My Class Routine')
//       .should('exist');
//     })
//   })



//   describe('My First Test', () => {
//     it.only('Does not do much!', () => {
//         var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
//         cy.visit(expected_link);
    
//         cy.get('#logMain_UserName').type("011171060")
//         cy.get('#logMain_Password').type("2353")
//         cy.get('#logMain_Button1').click()
//         cy.wait(3000) 
  
//         cy.get(':nth-child(5) > .level1').click()
//         cy.wait(3000)
//     //  cy.get("container-fluid").should("exist")
//     cy.get('li.dropdown')
//     .contains('Course Evaluation')
//     .click();

//   // After clicking on the Course Evaluation, you may need to wait for the dropdown menu to appear
//   // Then, you can click on the Evaluation Form link inside the dropdown menu
//   cy.get('ul.level2.dropdown-menu.dynamic')
//     .contains('Evaluation Form')
//     .click();
//     })
//   })

  describe('check functionality of registration process', () => {

    beforeEach("login",()=>{
      var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
        cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(3000) 
      cy.get(':nth-child(5) > .level1').contains('Registration').click()
      cy.get('[aria-haspopup="ctl00_menuMain:submenu:14"] > .dropdown-toggle').click()
      cy.get(".level2.dropdown-menu.dynamic").contains("Result History").click();
    })
     
       


      it('trimester element test developed', () => {
       cy.get(".msgTitle").contains("Message: ")
       cy.get("#ctl00_MainContainer_lblResult").contains("Trimester wise GPA and CGPA")
       cy.get('#ctl00_MainContainer_imgPhoto').should('exist');

      })

    it('check the trimester-wise result table header value', () => {

      cy.get('#ctl00_MainContainer_gvResult').within(() => {
        // Within the table, verify the text of each table header cell
        cy.get('th').eq(0).should('contain', 'Trimester');
        cy.get('th').eq(1).should('contain', 'Credit(Probation)');
        cy.get('th').eq(2).should('contain', 'Term GPA(Probation)');
        cy.get('th').eq(3).should('contain', 'CGPA(Probation)');
        cy.get('th').eq(4).should('contain', 'Credit(Transcript)');
        cy.get('th').eq(5).should('contain', 'GPA(Transcript)');
        cy.get('th').eq(6).should('contain', 'CGPA(Transcript)');
    });
     //check number of rows
    cy.get('#ctl00_MainContainer_gvResult').find('tbody tr').should('have.length', 16);

    })


    it('Verifies that every row contains numeric values of the trimester-wise result table ', function () {
      // Visit the webpage with the table
      
      // Use cy.get() to select the table element
      cy.get('#ctl00_MainContainer_gvResult').within(() => {
          // Get all rows except the header row
          cy.get('tr.rowCss').each(($row, index) => {
              // Iterate over each cell in the row
              cy.wrap($row).find('td').each(($cell, cellIndex) => {
                  // Check if the cell contains numeric value
                  cy.wrap($cell).invoke('text').then((text) => {
                      expect(parseFloat(text)).to.not.be.NaN;
                  });
              });
          });
      });
  });
            


  
  it('Checks the presence and text of header elements', () => {
  
    // Check if the header row exists
      cy.get('.tableHead').should('exist');
      cy.get('#ctl00_MainContainer_gvRegisteredCourse').within(() => {
      // Within the table, verify the table header test
      cy.get('th').eq(0).should('contain', 'Trimester');
      cy.get('th').eq(1).should('contain', 'Course ID');
      cy.get('th').eq(2).should('contain', 'Course Name'); // Corrected from 'Course ID'
      cy.get('th').eq(3).should('contain', 'Credit');
      cy.get('th').eq(4).should('contain', 'Grade');
      cy.get('th').eq(5).should('contain', 'Point');
      cy.get('th').eq(6).should('contain', 'Course Status');
    });
  })
    
  


});
    
   
  // });
  




