package com.rei.stepdefinition;

import com.rei.objectrepository.ProductPage;
import com.rei.resources.FunctionalLibrary;

import cucumber.api.java.en.When;

public class ProductPageSteps extends FunctionalLibrary {

@When("The user selects colour, quantity")
public void the_user_selects_colour_quantity() {
   ProductPage product =new ProductPage();
click(product.getColor().get(2));
}

@When("The user clicks the add to cart button")
public void the_user_clicks_the_add_to_cart_button() {
	ProductPage product =new ProductPage();
	click(product.getAddtocart());
}

}
