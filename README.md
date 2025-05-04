🧪 Cypress Test Automation Framework

This repository contains an end-to-end testing framework built with Cypress for automating test flows in a sample banking application.

📁 Project Structure

├── cypress
│   ├── e2e
│   │   └── hermoineTransactionTest.cy.js   # Main test suite
│   ├── fixtures
│   │   └── transactions.json               # Test data for transactions
│   ├── support
│   │   ├── commands.js                     # Custom Cypress commands
│   │   └── pageObjects
│   │       ├── CustomerPage.js            # Page Object Model for customer UI
│   │       └── BankManagerPage.js         # Page Object Model for manager UI
├── cypress.config.js                      # Cypress configuration file
└── README.md                              # Project documentation

✅ Features

Page Object Model (POM) for modularity and reusability

Custom Cypress commands for better abstraction

Data-driven testing using fixtures

DOM interaction validations (add, delete, balance, etc.)

🔧 Setup Instructions

Install dependencies

npm install

Run Cypress Test Runner

npx cypress open

Run tests in headless mode

npx cypress run

📌 Custom Commands

Custom commands are defined in cypress/support/commands.js:

addCustomer(customer)

deleteCustomer(customer)

verifyCustomerInTable(customer)

clickAddCustomerHeader()

loginAsCustomer(name, accountNo)

performTransactionAndAssert(type, amount)

📚 Page Objects

Defined under cypress/support/pageObjects/:

BankManagerPage.js → Handles bank manager elements and actions

CustomerPage.js → Handles customer login, selection, and transactions

📄 Test Data

Transaction data for Hermoine Granger is stored in cypress/fixtures/transactions.json and used for verifying multiple deposit and withdrawal flows.
