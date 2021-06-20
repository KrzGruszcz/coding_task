import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const country = {
    'France': 3,
    'Germainy': 2,
    'Poland': 1
}
const city = {
    'Berlin': 4,
    'Cracow': 3,
    'Paris': 2,
    'Wroclaw': 1
}

Given('I go to Car Rent page', () => {
    cy.visit('/')
})

Then('Search result {string} displayed', (possibility) => {
    cy.get('#search-results')
        .should(
            possibility === 'is' ? 'exist' : 'not.exist'
        )
})

When('I select {string} country', (countryName) => {
    cy.get('#country')
        .select(countryName)
    cy.get('#country')
        .should('have.value', country[countryName])
})

And('I select {string} city', (cityName) => {
    cy.get('#city')
        .select(cityName)
    cy.get('#city')
        .should('have.value', city[cityName])
})

And('I type {string} model', (carModel) => {
    cy.get('#model')
        .type(carModel)
})

And('I choose {string} pick-up date', (pickupDate) => {
    cy.get('#pickup')
        .type(pickupDate)
})

And('I choose {string} drop-off date', (dropoffDate) => {
    cy.get('#dropoff')
        .type(dropoffDate)
})

And('I click \'Search\' button', () => {
    cy.get('.btn').contains('Search').click()
})

When('I click \'Rent\' button for {string} model', (carName) => {
    var found = false;
    cy.get('#search-results tbody tr').each(($el, index) => {
        if(!found && $el.text().includes(carName)) {
            found = true;
            cy.log(`${carName} found!`)
            cy.get(`#search-results tbody tr:nth-child(${index + 1}) .btn`).click()
            
        }
    })
})

Then('I see {string} rent details', (carName) => {
    cy.url().should('include', '/details')
    cy.get('.card-header').should('contain', carName)
    cy.get('a.btn').should('contain', 'Rent')
})