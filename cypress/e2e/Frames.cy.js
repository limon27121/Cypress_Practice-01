import 'cypress-iframe'

describe('Iframe Test-case', function () {
   // test case
   it('check i-frame text ', function (){
      // launch URL
      cy.visit("https://jqueryui.com/draggable/");
      // frame loading
      cy.frameLoaded('.demo-frame');
      //shifting focus
      cy.iframe().find("#draggable").then(function(t){
         const frmtxt = t.text()
         //assertion to verify text
         expect(frmtxt).to.contains('Drag me around');
         cy.log(frmtxt);
      })
   });
});