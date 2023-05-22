describe('Shopping  test', () => {


    it('quick unpolished test4 solution', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#login-button').should('be.visible')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contain', 'inventory.html')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.btn.btn_action.btn_medium.checkout_button').click()
        /*cy.get('#checkout').click()*/
        cy.url().should('contain', 'checkout-step-one.html')
        cy.get('#first-name').type('Zarko')
        cy.get('#last-name').type('Novicic')
        cy.get('#postal-code').type('10070')
        cy.get('#continue').click()
        cy.url().should('contain', 'checkout-step-two.html')
        cy.get('#finish').click()
        cy.url().should('contain', 'checkout-complete.html')
        cy.get('#back-to-products').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('#login-button').should('be.visible')
    })

})