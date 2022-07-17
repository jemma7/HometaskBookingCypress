/// <reference types="cypress" />

class openHomePage
{
visit()
{
    cy.visit("https://www.booking.com/")

    }

    search(value)
    {
       const searchBox = cy.get('[type="search"]')
        searchBox.clear()
        searchBox.type('Dilijan')
        return this
    }

    searchButton(value)
    {
       const searchButton = cy.get('[class="js-sb-submit-text "]')
        searchButton.click()
        return this
    }

    searchResults(value)
    {
       const searchResults = cy.get('[class="e1f827110f d3a14d00da"]')
       searchResults.should('contain.text','Dilijan:')
        return this
    }

    generateDatesForBooking (value) {
        let today = new Date();
        let startDate = new Date(today.setDate(today.getDate() + 3)).toISOString().split('T')[0];
        let endDate = new Date(today.setDate(today.getDate() + 8)).toISOString().split('T')[0];
        return [startDate, endDate];
     }

    occupancyConfig (value)
    {
    const occupancyButton = cy.get('[class="d47738b911"]')
    occupancyButton.invoke('show')
    return this
    }

    increaseAdultsNumber (value)
    {
    const adultIncreaseButton = cy.get('[class="d47738b911"]')   
    adultIncreaseButton.click({force:true})
    const plusButton = cy.get('[class="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e ae1678b153"]')
    plusButton.click()
    const number = cy.get('[class="e615eb5e43"]')
    number.should('contain.text','3')
    return this
    }

    filterStars (value)
    {
    const filterStarButton = cy.get('[class="bbdb949247"]')
    filterStarButton.check('class=4')
    filterStarButton.should('contain.text','4 stars')
    return this
    }

}
// class="f9afbb0024 f0d4d6a2f5 fda3b74d0d"


export default openHomePage