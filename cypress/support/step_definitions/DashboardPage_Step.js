const { Then } = require("@badeball/cypress-cucumber-preprocessor");

Then('Dasboard sayfasinin acildigini dogrularim', () => {
    cy.get('[data-test="page-title"]').should('have.text', 'Sales over the years')
})

Then("Site URL'inde admin ve dashboard kelimelerinin gectigini dogrularim", () => {
    cy.url().should('contain', 'admin/dashboard')
})

Then("Site URL'inde {string} ve {string} kelimelerinin gectigini dogrularim", (str1, str2) => {
    cy.url().should('contain', str1, str2)
})