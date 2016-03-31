@watch
Feature: Log into Facebook
    In order to use Facebook
    As an existing User
    I want to log into Facebook

    # Background: The following are required for below scenarios to pass
    #     Given I am not logged in

    Scenario: I can input username
        Given I navigate to Facebook
        And Input "example@email.com"

    Scenario: I can input password
        Given I input "password"

    Scenario: I can click Log In
        Given I click Log In button