Feature: Log into Facebook
    In order to use Facebook
    As an existing User
    I want to log into Facebook

    # Background: The following are required for below scenarios to pass
    #     Given I am not logged in

    @watch
    Scenario: I can access login view
        Given I navigate to Facebook
        And Input "example@email.com"
        And Input "password"
        When I click "Log In"
        Then I see "Home"