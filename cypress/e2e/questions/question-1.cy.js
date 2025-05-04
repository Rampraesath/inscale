/// <reference types="cypress" />
import BankManagerPage from '../../support/page-objects/bankManagerPage';

describe('Bank Manager Customer Management', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should create and delete customers as Bank Manager', () => {
    cy.fixture('customers').then((data) => {
      BankManagerPage.clickBankManagerLogin();
      cy.clickAddCustomerHeader();

      data.allCustomers.forEach((customer) => {
        cy.addCustomer(customer);
      });

      BankManagerPage.clickCustomersTab();

      data.allCustomers.forEach((customer) => {
        cy.verifyCustomerInTable(customer);
      });

      data.customersToDelete.forEach((customer) => {
        cy.deleteCustomer(customer);
      });
    });
  });
});
