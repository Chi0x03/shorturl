declare namespace Cypress {
  interface Chainable<Subject> {
    getByData(selector: string): Chainable<Element>;
  }
}
