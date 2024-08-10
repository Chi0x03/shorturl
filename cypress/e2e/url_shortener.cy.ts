describe('testing url shortening user journey', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    // cy.get("#__next").should("be.visible")
  })

  it('users insert url with http(s) prefix', () => {
    cy.getByData("link-input").type("https://youtube.com")
    cy.getByData("input-submit").click()
    cy.getByData("short-url-link").should("exist")
  })

  it('users can NOT insert url without http(s) prefix', () => {
    cy.getByData("link-input").type("youtube.com")
    cy.getByData("input-submit").click()
    cy.getByData("short-url-link").should("not.exist")
  })

  it('user can NOT insert invalid domain', () => {
    // cy.intercept("POST", "/").as("createShortUrl")

    cy.getByData("link-input").type("https://youtube")
    cy.getByData("input-submit").click()
    // cy.wait("@createShortUrl")
    cy.getByData("short-url-link").then(element => {
      expect(element).not.to.exist
    })
  })
})