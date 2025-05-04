import CustomerPage from './page-objects/customerPage';
import BankManagerPage from './page-objects/bankManagerPage';

  let expectedBalance = 0;
  
  Cypress.Commands.add('addCustomer', (customer) => {
    cy.get(BankManagerPage.firstNameInput).type(customer.firstName);
    cy.get(BankManagerPage.lastNameInput).type(customer.lastName);
    cy.get(BankManagerPage.postcodeInput).type(customer.postcode);
    cy.get(BankManagerPage.submitBtn).should('be.visible').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('Customer added successfully');
    });
  });

  Cypress.Commands.add('clickAddCustomerHeader', () =>{
    cy.get(BankManagerPage.addCustomerBtn).should('be.visible').click();
  })
  
  Cypress.Commands.add('verifyCustomerInTable', (customer) => {
    cy.get(BankManagerPage.customerTableRows).each(($row) => {
      const cells = $row.find('td');
      const firstName = cells.eq(0).text().trim();
      const lastName = cells.eq(1).text().trim();
  
      if (firstName === customer.firstName && lastName === customer.lastName) {
        expect(cells.eq(2).text().trim()).to.equal(customer.postcode);
      }
    });
  });
  
  Cypress.Commands.add('deleteCustomer', (customer) => {
    cy.get(BankManagerPage.customerTableRows).each(($row) => {
      const cells = $row.find('td');
      const firstName = cells.eq(0).text().trim();
      const lastName = cells.eq(1).text().trim();
  
      if (firstName === customer.firstName && lastName === customer.lastName) {
        expect(cells.eq(2).text().trim()).to.equal(customer.postcode);
        cy.wrap($row).find('button').click();
      }
    });
  });

  Cypress.Commands.add('loginAsCustomer', (name, accountNo) => {
    cy.contains('Customer Login').click();
    CustomerPage.selectUser(name);
    CustomerPage.login();
    cy.get(CustomerPage.welcomeLabel).should('have.text', name);
    CustomerPage.selectAccount(accountNo);
  });
  
  Cypress.Commands.add('performTransactionAndAssert', (type, amount) => {
    cy.contains('button', type).click();
    cy.wait(200) //added 200 milisecond to allow input to load properly
    cy.get(CustomerPage.amountInput)
    .should('be.visible')
    .clear({ force: true })
    .type(amount.toString(), { force: true });
    
    cy.get(CustomerPage.submitButton).click();
      cy.get('.center strong').eq(1).invoke('text').then((text) => {
        const actualBalance = parseInt(text.trim());
        if (type === 'Deposit') {
            expectedBalance += amount; 
          } else {
            expectedBalance -= amount; 
          }
          
        cy.log(`Expected: ${expectedBalance}, Actual: ${actualBalance}`);
        expect(actualBalance).to.equal(expectedBalance);
    });
   
  });
  
  
  
  