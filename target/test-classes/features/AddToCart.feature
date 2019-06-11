Feature: To view the item in add cart
  
  Scenario Outline: To see the added item in  cart
    Given The user is in rei page
    When The user search for "<item>" in search box and click search button
    And The user clicks the item in search results
    And The user selects colour, quantity
    And The user clicks the add to cart button 
    Then The user should see the item in cart

    Examples: 
      | item |
      | bags |
      