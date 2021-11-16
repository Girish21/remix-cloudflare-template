describe('Index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('sample test', () => {
    cy.findByText('Welcome to Remix!').should('exist')
  })
})
