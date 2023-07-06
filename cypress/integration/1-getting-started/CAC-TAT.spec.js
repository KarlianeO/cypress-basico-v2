// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach('Acessando a central de atendimento', function(){
        cy.visit('./src/index.html');
    })

    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('preencha os campos obrigatórios e envie o formulário', function(){

        cy.get('#firstName')
        .type('Karliane')

        cy.get('#lastName')
        .type('Oliveira')

        cy.get('#email')
        .type('karliane@email.com')

        cy.get('#open-text-area')
        .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', { delay: 0})

        cy.get('button[type="submit"]')
        .click()

        cy.get('.success')
        .should('be.visible', 'Mensagem enviada com sucesso')
  })

  it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.get('#firstName')
    .type('KarlianeO')

    cy.get('#lastName')
    .type('Oliveira')

    cy.get('#email')
    .type('karliane')

    cy.get('#open-text-area')
    .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', { delay: 0})

    cy.get('button[type="submit"]')
    .click()

    cy.get('.error')
    .should('be.visible', 'Valide os campos obrigatórios!')
  })


})
