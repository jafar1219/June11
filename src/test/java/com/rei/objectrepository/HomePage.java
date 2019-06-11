package com.rei.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.rei.resources.FunctionalLibrary;

public class HomePage {
public HomePage() {
	PageFactory.initElements(FunctionalLibrary.driver, this);
}
@FindBy(id="inputGroup")
private WebElement searchbox;
@FindBy(xpath="//span[@class='icon icon-rei-search pull-left']")
private WebElement searchbutton;
public WebElement getSearchbox() {
	return searchbox;
}
public WebElement getSearchbutton() {
	return searchbutton;
}

}
