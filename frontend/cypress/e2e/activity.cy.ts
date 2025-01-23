describe('activity', () => {
    it('should create activities', () => {
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

        cy.get('#create-act-btn').click()

        cy.get('#act-name').type('Atividade de teste Cypress')

        cy.get('#act-description').type('Atividade de teste Cypress')

        cy.get('#act-subject').type('Atividade de teste Cypress')

        cy.get('#create-act-btn').click()

        cy.url().should('include', '/classrooms')

        cy.get('#edit-act-btn').click()

        cy.get('#act-title').clear()

        cy.get('#act-title').type('Atividade de teste Cypress Editado')

        cy.get('#act-description').clear()

        cy.get('#act-description').type('Atividade de teste Cypress Editado')

        cy.get('#act-subject').clear()

        cy.get('#act-subject').type('Atividade de teste Cypress Editado')

        cy.get('#edit-act-btn').click()

        cy.url().should('include', '/classrooms')

        cy.get('#delete-act-btn').click()

        cy.get('#confirm-delete-act-btn').click()

        cy.url().should('include', '/classrooms')

        cy.get('#back-btn').click()

        cy.url().should('include', '/classrooms')

    })
})