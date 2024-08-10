/// <reference types="cypress" />
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test="${selector}"]`)
})