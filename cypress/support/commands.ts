/// <reference types="cypress" />
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("getByData", (selector: string): Cypress.Chainable => {
  return cy.get(`[data-test="${selector}"]`);
});
