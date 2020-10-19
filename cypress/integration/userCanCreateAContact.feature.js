describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Kyungin')
        cy.get('#email').type('nakyungin93@gmail.com')
        cy.get('#phone').type('1234 567890')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('student')
        cy.get('#sns').type('TBD')
    })
})