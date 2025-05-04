# Cypress Test Automation Framework

This repository contains an end-to-end testing framework built with Cypress for automating test flows in a sample banking application.

## Project Structure

```bash

├── cypress
│   ├── e2e
│   │   └── question-1.cy.js   # Test case for question 1
│   │   └── question-2.cy.js   # Test case for question 2
│   ├── fixtures
│   │   └── customers.json      # Test data for question 1
│   │   └── transactions.json   # Test data for question 2
│   ├── support
│   │   ├── commands.js         # Custom Cypress commands
│   │   └── page-objects
│   │       ├── customerPage.js  # Page Object Model for customer UI
│   │       └── bankManagerPage.js # Page Object Model for manager UI
├── cypress.config.js           # Cypress configuration file
└── README.md                   # Project documentation
```

## Features
- [x] <span style="color:limegreen"> Page Object Model (POM) for modularity and reusability </span>

- [x] <span style="color:limegreen"> Custom Cypress commands for better abstraction </span>

- [x] <span style="color:limegreen"> Data-driven testing using fixtures </span>

- [x] <span style="color:limegreen"> DOM interaction validations (add, delete, balance, etc.) </span>


## Setup Instructions

1. Install dependencies

2. npm install

3. Run Cypress Test Runner

4. npx cypress open

5. Run tests in headless mode

6. npx cypress run

## Custom Commands

Custom commands are defined in cypress/support/commands.js:

- addCustomer(customer)

- deleteCustomer(customer)

- verifyCustomerInTable(customer)

- clickAddCustomerHeader()

- loginAsCustomer(name, accountNo)

- performTransactionAndAssert(type, amount)

##  Page Objects

Defined under cypress/support/pageObjects/:

- BankManagerPage.js → Handles bank manager elements and actions

- CustomerPage.js → Handles customer login elements and actions

##  Test Data

- Transaction data for Question 1 is stored in cypress/fixtures/customers.json and used for creating and deleting customers
- Transaction data for Question 2 is stored in cypress/fixtures/transactions.json and used for verifying multiple deposit and withdrawal flows









