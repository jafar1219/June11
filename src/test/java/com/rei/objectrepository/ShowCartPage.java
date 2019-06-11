package com.rei.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.rei.resources.FunctionalLibrary;

public class ShowCartPage {
	public ShowCartPage() {
		PageFactory.initElements(FunctionalLibrary.driver, this);
	}
@FindBy(xpath="(//span[@class='js-cart-count'])[2]")
private WebElement cartchecking;
public WebElement getCartchecking() {
	return cartchecking;
}

}
