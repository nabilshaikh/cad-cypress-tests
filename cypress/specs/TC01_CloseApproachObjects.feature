Feature: SBDB Close-Approach Data API

As a product manager, I want an API to be created which returns close-approach data for all asteroids and comets based on JPL’s SBDB
    
    Background: Initialize the close-approach data api base url
        Given base url 'https://ssd-api.jpl.nasa.gov/cad.api'
    
    Scenario Outline: Verify the total number of objects which were close to Earth in the given year
        * make HTTP 'GET' request
        * parameter with key 'date-min' and value '2021-01-01'
        * parameter with key 'date-max' and value '2021-12-31'
        * parameter with key 'body' and value '<bodies>'
        * verify response count to equal 1594
    
    Examples:

        | bodies |
        | Earth  |
        | earth  |
        | EaRtH  |
    
    Scenario: Verify the returning results limit
        * make HTTP 'GET' request
        * parameter with key 'date-min' and value '2021-01-01'
        * parameter with key 'date-max' and value '2021-12-31'
        * parameter with key 'body' and value 'Earth'
        * parameter with key 'limit' and value '1'
        * verify response count to equal 1