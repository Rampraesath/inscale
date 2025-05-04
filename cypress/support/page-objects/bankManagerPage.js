class BankManagerPage {
    bankManagerLoginBtn = 'button:contains("Bank Manager Login")';
    customersTab = 'button:contains("Customers")';
    addCustomerBtn = 'button:contains("Add Customer")';
    firstNameInput = 'input[placeholder="First Name"]';
    lastNameInput = 'input[placeholder="Last Name"]';
    postcodeInput = 'input[placeholder="Post Code"]';
    submitBtn = 'button[type="submit"]:contains("Add Customer")';
    customerTableRows = 'table tbody tr';
  
    clickBankManagerLogin() {
      cy.get(this.bankManagerLoginBtn).should('be.visible').click();
    }
  
    clickCustomersTab() {
      cy.get(this.customersTab).should('be.visible').click();
    }
  }

  export default new BankManagerPage();