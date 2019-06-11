package com.rei.stepdefinition;

import org.junit.Assert;

import com.rei.objectrepository.ShowCartPage;
import com.rei.resources.FunctionalLibrary;

import cucumber.api.java.en.Then;

public class ShowCartSteps extends FunctionalLibrary {


@Then("The user should see the item in cart")
public void the_user_should_see_the_item_in_cart() {
ShowCartPage showcart=new ShowCartPage();
Assert.assertEquals("1", showcart.getCartchecking());
	
}
}