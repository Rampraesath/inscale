class CustomerPage {
    userSelectDropdown = 'select#userSelect';
    loginButton = 'button:contains("Login")';
    welcomeLabel = '.fontBig.ng-binding';
    accountSelectDropdown = 'select#accountSelect';
    amountInput = 'input[placeholder="amount"]';
    submitButton = 'button[type="submit"]';
    balanceDisplay = '.center strong';
  
    selectUser(name) {
      cy.get(this.userSelectDropdown).select(name);
    }
  
    login() {
    cy.get(this.loginButton).click();
    }
  
    selectAccount(accountNo) {
      cy.get(this.accountSelectDropdown).select(accountNo);
    }
  
  
    getBalanceText() {
      return cy.get(this.balanceDisplay).eq(1).invoke('text');
    }
  }
  
  export default new CustomerPage();