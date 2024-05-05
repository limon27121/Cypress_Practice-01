describe('My First Test', () => {

    beforeEach("visit the site",()=>{
        cy.visit("https://www.letskodeit.com/practice")
    })
    it('Does not do much!', () => {
     
      cy.get("#mousehover").trigger("mouseover");

      cy.get('div.mouse-hover-content').invoke('show');
      //click hidden element
      cy.contains('Reload').click();
    })

    it("click",()=>{
        // cy.get("#alertbtn").click()
        cy.window().then((win) => {
            cy.spy(win, "alert").as("alertSpy");
          });
      
          // Click the Alert button
          cy.get("#alertbtn").click();
      
          // Assert that the alert was triggered with the expected message
          cy.get("@alertSpy").should("have.been.calledWith", "Hello , share this practice page and share your knowledge");
    })
  })


  describe("dbl click",()=>{
    it.only("test1",()=>{
        cy.visit("https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_dblclick")

        cy.window().then((win) => {
            cy.spy(win, "alert").as("alertSpy");
          });
      
          // Double-click the paragraph
          cy.get("p").dblclick();
      
          // Assert that the alert was triggered with the expected message
          cy.get("@alertSpy").should("have.been.calledWith", "The paragraph was double-clicked");
    })
  })