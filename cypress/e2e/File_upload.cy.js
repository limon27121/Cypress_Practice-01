import 'cypress-file-upload';
describe('file upload test', () => {
    it('upload the single-file', () => {
       
        const fileName = "263747.jpg"; // Name of the JPG file you want to upload

    // Visit the page with the form
    cy.visit('https://the-internet.herokuapp.com/upload');

    // Attach the JPG file to the file input field
    cy.get('#file-upload').attachFile("fileName");

    // Submit the form
    cy.get('#file-submit').click();

    // Assert that the file was uploaded successfully
    cy.get('.example').contains('File Uploaded!');
    cy.get('#uploaded-files').contains( "263747.jpg");

    })
  })