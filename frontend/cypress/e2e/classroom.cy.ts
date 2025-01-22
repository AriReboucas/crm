describe('classroom', () => {
    it('should create classroom', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email').type('mariano_spencer@gmail.com')

        cy.get('#password').type('123')

        cy.get('#login-button').click()

        cy.url().should('include', '/classrooms')

        cy.visit('http://localhost:3000/classrooms/new')

        cy.get('#name').type('Sala de teste Cypress')

        cy.get('#description').type('Sala de teste Cypress')

        cy.get('#subject').type('Sala de teste Cypress')

        cy.get('#create-cl-btn').click()

        cy.url().should('include', '/classrooms')

        cy.get('#back-btn').click()

        cy.url().should('include', '/classrooms')

    })
})