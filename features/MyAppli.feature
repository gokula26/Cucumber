Feature: Test facebook smoke scenarios

  Scenario: Test login with valid credentials
    Given Open chrome and start application
    When I enter valid "urmilareddy.billapati@gmail.com" and "password"
    Then user should be able to login successfully
    
   
   
