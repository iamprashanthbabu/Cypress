/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import HomePage from '../../support/pageObjects/HomePage'


describe('Test Suit',function(){

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data

        })
    }
    )


    it('Test1',function(){

        const homePage = new HomePage()
        cy.visit(Cypress.env('url')+"/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()



    }
    
    
    
    )



}

)