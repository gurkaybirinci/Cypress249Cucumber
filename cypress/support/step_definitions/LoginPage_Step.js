const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { login } = require("../pages/LoginPage_POM")

When('Email alanina bir email yazarim', () => {
    cy.get(login.emailInput).type('admin@practicesoftwaretesting.com')
})

When('Password alanina bir password yazarim', () => {
    cy.get(login.passwordInput).type('welcome01')
})

When('Login butonuna tiklarim', () => {
    cy.get(login.loginButton).click()
})

When('Email alanini bos birakirim', () => {
    
})

Then("Email'in gerekli oldugunu soyleyen bir hata mesaji gorurum", () => {
    cy.get(login.emailRequiredMessage).should('contain', 'E-mail is required.')
})

When('Email alanina {string} yazarim', (email) => {
    cy.get(login.emailInput).type(email)
})

When('Password alanina {string} yazarim', (password) => {
    cy.get(login.passwordInput).type(password)
})

When('Password alanina {int} yazarim', (password) => {
    cy.get(login.passwordInput).type(password)
})


