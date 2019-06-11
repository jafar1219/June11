package com.rei.objectrepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.rei.resources.FunctionalLibrary;

public class ProductPage {
	public ProductPage() {
		PageFactory.initElements(FunctionalLibrary.driver, this);
	}
@FindBy(className="thumb color-thumb")
private List<WebElement> color;
@FindBy(xpath="//input[@id='product-quantity-select']")
private List<WebElement> quantity;	
@FindBy(xpath="//label[contains(text(),'Ship to address')]")
private WebElement address;
@FindBy(xpath="//button[@id='add-to-cart']")
private WebElement addtocart;
public List<WebElement> getColor() {
	return color;
}
public List<WebElement> getQuantity() {
	return quantity;
}
public WebElement getAddress() {
	return address;
}
public WebElement getAddtocart() {
	return addtocart;
}

}
