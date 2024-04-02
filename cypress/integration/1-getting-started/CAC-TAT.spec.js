// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach('Acessando a central de atendimento', function(){
        cy.visit('./src/index.html');
    })

    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

  it('preencha os campos obrigatórios e envie o formulário', function() {

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

        cy.get('.success')
        .should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.get('#firstName')
    .type('KarlianeO')

    cy.get('#lastName')
    .type('Oliveira')

    cy.get('#email')
    .type('karliane')

    cy.get('#open-text-area')
    .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', { delay: 0})

    cy.contains('button', 'Enviar')
    .click()

    cy.get('.error')
    .should('be.visible', 'Valide os campos obrigatórios!')
  })

  it('campo telefone continua em branco quando preenchido com valor não númerico', function(){
    cy.get('#phone')
    .type('teste')
    .should('have.value', '')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    const longTex = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    cy.get('#firstName')
    .type('Karliane')

    cy.get('#lastName')
    .type('Oliveira')

    cy.get('#email')
    .type('karliane@email.com')

    cy.get('#phone-checkbox')
    .click()

    cy.get('#open-text-area')
    .type(longTex, { delay: 0})

    cy.contains('button', 'Enviar')
    .click()

    cy.get('.error')
    .should('be.visible', 'Valide os campos obrigatórios!')
  
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
    const longTex = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    cy.get('#firstName')
    .type('Karliane')
    .should('have.value', 'Karliane')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .type('Oliveira')
    .should('have.value', 'Oliveira')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .type('karliane@email.com')
    .should('have.value', 'karliane@email.com')
    .clear()
    .should('have.value', '')

    cy.get('#phone')
    .type('85978845')
    .should('have.value', '85978845')
    .clear()
    .should('have.value', '')
  
  })
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
    cy.contains('button', 'Enviar')
    .click()

    cy.get('.error')
    .should('be.visible')
  })

  it('envia formulário com sucesso usando comando costumizado', function(){
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success')
    .should('be.visible')
  })

  it('seleciona produto youtube', function(){
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
  })

  it('selecione produto metoria', function(){
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })

  it('seleciona produto blog', function(){
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca tipo de atendimento feedback', function(){
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
  })
  it.only('marca cada tipo de atendimente', function(){
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  })
})
