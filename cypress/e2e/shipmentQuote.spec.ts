/// <reference types="cypress" />

describe('Shipment Quote', () => {
    it('Verify user can calculate the shipment quote from Malaysia to India', () => {
      cy.visit('https://pos.com.my/send/ratecalculator');
      cy.get('input[formcontrolname="postcodeFrom"]')
        .type('35600', {force: true});
      cy.get('input[placeholder="Select country"]')
        .clear({force: true})
        .type('India', {force: true});
      cy.get('small:contains("India - IN")')
        .click({force: true});
      cy.get('input[formcontrolname="itemWeight"]')
        .type('1', {force: true});
      cy.get('a:contains("Calculate")')
        .click({force: true});
      cy.get('a:contains("Book Now")')
        .should('have.length.greaterThan', 1);
    })
  })