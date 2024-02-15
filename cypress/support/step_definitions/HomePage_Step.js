const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Ben ToolShop sitesine giderim', () => {
    cy.visit('/');
})

When('Sign in linkine tiklarim', () => {
    cy.get('[data-test="nav-sign-in"]').click()
})

When('Github Repo linkine tiklarim', () => {
    cy.openInSameTab('[href="https://github.com/testsmith-io/practice-software-testing"]')
})

Given('Siteye git', () => {
    cy.visit(('https://www.hepsiburada.com/'), {
        headers: {
            "User-Agent": "axios/0.27.1"
        }
    });
})
