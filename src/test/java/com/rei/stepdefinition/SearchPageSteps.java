package com.rei.stepdefinition;

import com.rei.objectrepository.SearchPage;
import com.rei.resources.FunctionalLibrary;

import cucumber.api.java.en.When;

public class SearchPageSteps extends FunctionalLibrary {


@When("The user clicks the item in search results")
public void the_user_clicks_the_item_in_search_results() {
   SearchPage search=new SearchPage();
   click(search.getBag().get(3));
}
}
