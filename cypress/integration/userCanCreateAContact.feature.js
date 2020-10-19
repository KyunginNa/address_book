describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3000')
        cy.get('#add-contact').click()
        cy.get('#name').type('Kyungin')
        cy.get('#email').type('nakyungin93@gmail.com')
        cy.get('#phone').type('1234 567890')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('student')
        cy.get('#sns').type('TBD')
        cy.get('#submit').click()
    })

    it('displays a name of the new contact', () => {
        cy.get('#contact-list').should('contain','Kyungin')
    })

    it('displays an email address of the new contact', () => {
        cy.get('#contact-list').should('contain','nakyungin93@gmail.com')
    }
    )

})