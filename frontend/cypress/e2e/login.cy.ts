describe('auth', () => {
  it('should login', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#email').type('mariano_spencer@gmail.com')

    cy.get('#password').type('123')

    cy.get('#login-button').click()

    cy.url().should('include', '/classrooms')
  })
})