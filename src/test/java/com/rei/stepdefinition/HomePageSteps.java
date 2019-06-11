package com.rei.stepdefinition;

import com.rei.objectrepository.HomePage;
import com.rei.resources.FunctionalLibrary;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageSteps extends FunctionalLibrary {
	@Given("The user is in rei page")
	public void the_user_is_in_rei_page() {
	navigateToUrl("https://www.rei.com/");    
	}

	@When("The user search for {string} in search box and click search button")
	public void the_user_search_for_in_search_box_and_click_search_button(String string) {
	    HomePage home=new HomePage();
	    setText(home.getSearchbox(), string);
	    click(home.getSearchbutton());
	}

}
