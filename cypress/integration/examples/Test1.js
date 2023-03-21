/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />



describe('My First Test Suit', function()

{

    it ('My First Test case',  function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){

            console.log('sf')

        } )
        cy.get('@productLocator').find('.product').each(($e1,index,$list) => {

            const textVeg= $e1.find('h4.product-name').text()
            if (textVeg.includes('Cashews')){
               cy.wrap ($e1).find('button').click

            }
        })

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())

        
        })
        


    }
    
    )


})