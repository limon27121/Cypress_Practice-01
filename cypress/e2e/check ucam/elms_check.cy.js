describe('Check log in functionality', () => {

     beforeEach("login credential",()=>{
      var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
      cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(2000)
     })
    
      it("test the header part after log in ",()=>{
        var expected_link="https://ucam.uiu.ac.bd/Security/Login.aspx"
        //check the image is visible or not
        cy.get('[alt="Image"]').should('be.visible')
        cy.get('[alt="Image"]').should('have.attr', 'src', '/Images/BannerLogo.gif')

        //check the class contains the element 
        cy.get('.semesterStatusLabel').contains("Current→")
        cy.get('.semesterStatus').contains("241 - Spring 2024 (Semester), 241 - Spring 2024 (Trimester)")
        cy.get('.loginStyle').contains("011171060")
        cy.get("#ctl00_lblSeparate").contains("/")
        cy.get('.logoutStyle').contains("Logout")
        
        //click the logout button from the home screen
        cy.get('.logoutStyle').click()
        //check that click the logout button the url is matched with expected link
        cy.url().should('eq', expected_link);
        
        })


        //check the navbar element and length
        it("test the navbar header",()=>{
          cy.get('.navbar-header ul.staticHome').should('have.length', 3)
    
          cy.get('.navbar-header ul.staticHome li').contains("Home")
          cy.get('.navbar-header ul.staticHome li').contains("IQAC")
          cy.get('.navbar-header ul.staticHome li').contains("OBE")
    
         })
         

          //check the navbar element and length with collapse menu
      it("test the navbar-collapse",()=>{

        // cy.get('#ctl00_menuMain ul.level1.nav.navbar-nav.static li.static').should('have.length', 5)

        //this is the updated part code 
        cy.get('#ctl00_menuMain>ul>li').should('have.length', 5)


        cy.get('#ctl00_menuMain>ul>li>a').contains("Student Accounts")
        cy.get('#ctl00_menuMain>ul>li>a').contains("Transport Registration")
        cy.get('#ctl00_menuMain>ul>li>a').contains("COE")
        cy.get('#ctl00_menuMain>ul>li>a').contains("Admin Control")
        cy.get('#ctl00_menuMain>ul>li>a').contains("Registration")
      })
      
    })
   
  

  


// url test and title check the site in login page
  describe('URL Test', () => {
    it('should check if the URL is correct', () => {
      const expectedURL = 'https://ucam.uiu.ac.bd/Security/LogIn.aspx'
      
      // Visit the expected URL
      cy.visit(expectedURL)
  
      // Assert that the current URL matches the expected URL
      cy.url().should('eq', expectedURL)

      //check the title of the website

      const expectedTitle = 'UIU EMS LogIn'
      cy.title().should('include', expectedTitle)
    })
  })
  

//check the visibility of the logo in login page

  describe('Logo Availability Test', () => {
    it('should check if the logo is available', () => {
      cy.visit('https://ucam.uiu.ac.bd/Security/LogIn.aspx')
  
      // Check if the logo image exists and is visible
      cy.get('img[src="../Images/uiu_logo_update.png"]').should('be.visible')
    })
  })
  

  //test the home page panel

  describe('check panel body after log in', () => {
    beforeEach("login credential",()=>{
      var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
      cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(2000)
     })
    it('write test for panel body elements of home screen', () => {
      
      cy.get(".panel-body").should("exist")

      cy.get('.col-md-12.col-sm-12.col-xs-12 .text-white')
      .contains("Transcript CGPA: ")
      cy.get("#ctl00_MainContainer_Status_CGPA").contains("3.29")
      cy.get('.col-md-12.col-sm-12.col-xs-12 .text-white')
      .contains("Completed Credit: ")
      cy.get("#ctl00_MainContainer_Status_CompletedCr").contains("138")

      cy.get('.col-md-12.col-sm-12.col-xs-12 .text-white')
      .contains("Current Balance: ")
      cy.get("#ctl00_MainContainer_FI_CurrentBalance").contains("0 Tk.")
      cy.get('.col-md-12.col-sm-12.col-xs-12 .text-white')
      .contains("Negative(-) balance means advance payment")

      cy.contains('.col-md-7.col-sm-7.col-xs-7 h5.text-white', 'For online payment').should('exist');

      cy.get("#ctl00_MainContainer_imgBtnOnlinePayment").click()
      cy.wait(5000)

      //back to home section from the another section
      cy.window().then((win) => {
        win.history.back();
      });

    })

    it("Test important Announcement section",()=>{

      cy.get('.panel-heading').contains('Important Announcement').should('exist');
      cy.get('.col-sm-12.col-md-8 > :nth-child(1) > .col-sm-12 > :nth-child(1) > .panel-body').should("be.visible")
    })

  })

  describe('check profile element', () => {
   
    beforeEach("login credential",()=>{
      var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
      cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(2000)
     })

     it('Checks for Image and Text of profile section', () => {
 
      // Check if the image exists and is visible
      cy.get('#ctl00_MainContainer_SI_Image').should('exist').and('be.visible');
  
      // Check if the name text exists and is visible
      cy.get('#ctl00_MainContainer_SI_Name').should('exist').and('be.visible');
  
      // Check if the ID text exists and is visible
      cy.get('#ctl00_MainContainer_Label1').should('exist').and('be.visible');
    });
    it('check profile body element', () => {
      cy.get(".col-sm-12.col-md-12.col-lg-12").should("exist");
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Profile")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Information")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("DOB")
      cy.get("span#ctl00_MainContainer_SI_DOB").contains("22 November, 1998")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Phone")
      cy.get("span#ctl00_MainContainer_SI_Phone").contains("01623692274")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Mother's Name")
      cy.get("span#ctl00_MainContainer_SI_MotherName").contains("Naznin Alam")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Father's Name")
      cy.get("span#ctl00_MainContainer_SI_FatherName").contains("Md. Manik Miah")

    
    })

    it("test advisor information,attendance summary, result summary section",()=>{
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Advisor Information")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Attendance Summary ")
      cy.get(".col-sm-12.col-md-12.col-lg-12").contains("Result Summary")
    })
  })


  describe('Footer Test', () => {
    beforeEach("login credential",()=>{
      var expected_link="https://ucam.uiu.ac.bd/Security/LogIn.aspx"
      cy.visit(expected_link);

      cy.get('#logMain_UserName').type("011171060")
      cy.get('#logMain_Password').type("2353")
      cy.get('#logMain_Button1').click()
      cy.wait(2000)
     })

    it('should contain the correct footer text', () => {      
      // Assert that the footer element exists
      cy.get('.footer').should('exist');
      
      // Assert that the footer text contains the expected content
      cy.get('.footer')
        .contains('Powered by Edusoft Consultants Ltd')
        .contains('Copyright © 2013 - 2024 Edusoft Consultants Ltd. All rights reserved.');
    });
  });
  