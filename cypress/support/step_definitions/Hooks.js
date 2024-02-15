const { Before, After } = require("@badeball/cypress-cucumber-preprocessor");

Before(() => {
    cy.log('Her testten önce çalışır.')
})

Before({ tags: "@smoke" }, () => {
    cy.log('@smoke tagına ait senaryolardan önce çalışır.')
})

After(() => {
    cy.log('Her testten sonra çalışır.')
})