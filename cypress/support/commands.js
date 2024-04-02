Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName')
  .type('Karliane')
  cy.get('#lastName')
  .type('Oliveira')
  cy.get('#email')
  .type('karliane@email.com')
  cy.get('#open-text-area')
  .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', { delay: 0})
  cy.contains('button', 'Enviar')
  .click()

})