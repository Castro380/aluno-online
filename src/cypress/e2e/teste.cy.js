describe('Testando',()=>{
    it('Cypress',()=>{
       cy.visit('/requerimentos')
       cy.get('#navbarToggler1 > ul.navbar-nav.mr-auto.mt-2.mt-lg-0 > li:nth-child(5) > a').click()
       cy.get('body > div > div > div.card-header > a').click()
       cy.get("#inputDisciplina").select("ADS032 - Construção de Frontend")
       cy.get("#inputProva").select("A3")
       cy.get('#inputArgumentacao').type('TESTE TESTE TESTE')
       cy.get('body > div > div > div.card-body > form > button').click()
       cy.get('body > div > div > div.card-body').contains('ADS032 - Construção de Frontend')
       cy.get('body > div > div > div.card-body').contains('A3')
       })
})

