

# HometaskBookingCypress/Getting started
**Set up/Global dependences**

Download Node.js.v16.16.0 and NPM
**Set up/Project dependences**

Install cypress 10.3.0 version with the following command npm install cypress --save-dev

**Tasks**

1. Launch  https://www.booking.com/ page
2. Fill in "Where are you going?" filed "Dilijan"
3. Select date
4. Increase number of adults
5. Click on the "Search" button
6. Check all result items contain "Dilijan"
7. Filter results by "Star Rating" (4 stars)
8. Check result list have items only with 4 stars

**Test Run**

Run tests with the following commands

from browser: npx cypress open

from terminal: npx cypress run
