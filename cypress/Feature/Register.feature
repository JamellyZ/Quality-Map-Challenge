Feature: User Registration

Scenario: Register Successfully
    Given I am on the registration page
    When I fill in the registration form with valid details
    And I submit the form
    Then I should see a message: "Your registration completed"

Scenario: Register with an email that already exists
    Given I am on the registration page
    When I fill in the registration form with an email already that exists
    And I submit the form
    Then I should see an error message: "The specified email already exists"

Scenario: Check empty filds
    Given I am on the registration page
    When I Don't fill in the registration form
    And I submit the form
    Then I should see some error messages:
      | "First name is required." |
      | "Last name is required."  |
      | "Email is required."      |
      | "Password is required."   |

Scenario: Register with Invalid Email
    Given I am on the registration page
    When I fill in the registration form with "<invalidEmail>"
    And I click outside the input box
    Then I should see an error message: "Wrong email"

    Examples:
      | invalidEmail          |
      | invalidemail@         |
      | @invalidemail.com     |
      | invalidemail.com      |

Scenario: Register with Invalid Password
    Given I am on the registration page
    When I fill in the registration form with "<invalidPassword> less than 6 characters"
    And I click outside the input box
    Then I should see an error message: "Password must meet the following rules: must have at least 6 characters"

    Examples:
      | 12345         |
      | 11111         |
      | abcde         |



  
