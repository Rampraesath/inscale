/// <reference types="cypress" />


describe('Hermoine Granger Account Transaction Test', () => {
    

    beforeEach(function(){
        cy.fixture('transactions').then((data) => {
            this.transactions = data;
          });
        cy.visit('/');
        cy.loginAsCustomer('Hermoine Granger', '1003')
      });
    
      it('should verify balance after each transaction', function () {
        for (const { amount, type } of this.transactions) {
            cy.performTransactionAndAssert(type, amount)
          }
      });
    });

