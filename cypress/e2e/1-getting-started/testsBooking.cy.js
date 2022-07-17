/// <reference types="cypress" />

import openHomePage from "../../pageObject/bookingHopmePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('my Booking project', () => {
    it('launch Booking homepage', () => {

        const bp = new openHomePage()
        bp.visit()
        bp.search('Dilijan')
        bp.searchButton()
        bp.searchResults()
        bp.generateDatesForBooking()
        bp.occupancyConfig()
        bp.increaseAdultsNumber()
        bp.filterStars()

    })
})
