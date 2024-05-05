//log in home page then click the registration then click the toggle button then click the my view

  describe('check functionality of My view => result history process', () => {

    beforeEach("login",()=>{
      var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
        cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(3000) 
      cy.get(':nth-child(5) > .level1').contains('Registration').click()
      // cy.get("#ctl00_menuMain")
      // .contains("Registration")
      // .click();

      cy.get('[aria-haspopup="ctl00_menuMain:submenu:14"] > .dropdown-toggle').click()

      cy.get(".level2.dropdown-menu.dynamic").contains("Result History").click();
    })
     
    it("test Student course history",()=>{
      cy.get(".col-md-12 .col-lg-12").contains("Student Course History")
      cy.get(".col-md-12 .col-lg-12").should("be.visible")
      cy.get(".panel.panel-default.pp").should("be.visible");
      cy.get(".panel.panel-default.pp").contains("Student ID :").should("be.visible");
      //check input field value
      cy.get("#ctl00_MainContainer_txtStudentId").should("have.value", "011171060");
      cy.get("#ctl00_MainContainer_btnLoad").should("exist").click()


      // Check if the student name label is available and contains the correct text
    cy.get(".panel.panel-default.pp")
      .contains("Student Name :")
      .should("be.visible");

    // Check if the student name value is correct
    cy.get("#ctl00_MainContainer_lblStudentName")
      .should("contain", "Md. Moontaseralam");


      // Check if the program label is available and contains the correct text
    cy.get(".panel.panel-default.pp")
      .contains("Program :")
      .should("be.visible");

    // Check if the program value is correct
    cy.get("#ctl00_MainContainer_lblStudentProgram")
      .should("contain", "BSCSE");
    })
     
    it("test another section of student course history",()=>{

      cy.get(".panel.panel-default.pp").contains("CGPA :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblCGPA").contains("3.29")

      cy.get(".panel.panel-default.pp").contains("Degree Req. :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblDegreeReq").contains("138.00")

      cy.get(".panel.panel-default.pp").contains("Com. Credit(s) :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblCompletedCr").contains("138.00")

      cy.get(".panel.panel-default.pp").contains("Com. Credit(s) :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblCompletedCr").contains("138.00")

      cy.get(".panel.panel-default.pp").contains("Probation :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblProbation").contains("No probation!")

      cy.get(".panel.panel-default.pp").contains("Active Status :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblActiveStatus").contains("Inactive")

      cy.get(".panel.panel-default.pp").contains("Att. Credit(s) :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblAttemptedCr").contains("138.00")

      cy.get(".panel.panel-default.pp").contains("Waived/Transferred Credit(s) :").should("be.visible")
      cy.get("#ctl00_MainContainer_lblWaivedTransferCr").contains("0")

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

   // test Trimester wise GPA and CGPA section
    it('Verifies that every row contains numeric values of the trimester-wise result table ', function () {
     
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
            


  // test Result of completed/registered courses section
  it('Checks the presence and text of header elements', () => {

    cy.get("#ctl00_MainContainer_lblRegistered").contains("Result of completed/registered courses")
  
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

 // test Transferred/Waived courses section
  it("test Transferred/Waived courses",()=>{
    cy.get("#ctl00_MainContainer_lblWaiver").contains("Transferred/Waived courses")

    cy.get(".panel.panel-default.pp").should("be.visible")
  })

  //test fotter section
  it('should contain the correct footer text', () => {      
    // Assert that the footer element exists
    cy.get('.footer').should('exist');
    
    // Assert that the footer text contains the expected content
    cy.get('.footer')
      .contains('Powered by Edusoft Consultants Ltd')
      .contains('Copyright © 2013 - 2024 Edusoft Consultants Ltd. All rights reserved.');
  });

});
    
  




