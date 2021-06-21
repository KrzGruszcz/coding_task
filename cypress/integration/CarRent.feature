Feature: Car Rent Page

    Scenario: Search for availability of specific car
        Given I go to Car Rent page
        And Search result 'is not' displayed
        When I select 'Poland' country
        And I select 'Wroclaw' city
        And I type 'Skoda' model
        And I choose '2021-06-22' pick-up date
        And I choose '2021-06-23' drop-off date
        And I click 'Search' button
        Then Search result 'is' displayed

    Scenario: Select specific car
        Given Search result 'is' displayed
        When I click 'Rent' button for 'Skoda Octavia' model
        Then I see 'Skoda Octavia' rent details

    Scenario: Submit car rental
        Given I click 'Rent' button in rent details
        When I set 'Krz' name
        And I set 'Gruszcz' last name
        And I set '1111222233334444' card number
        And I set 'krz.gruszcz@gmail.com' email
        And I submit car rental
        # TODO: Page not found