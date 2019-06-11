package com.rei.objectrepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.rei.resources.FunctionalLibrary;

public class SearchPage {
	public SearchPage() {
		PageFactory.initElements(FunctionalLibrary.driver, this);
	}
	@FindBy(xpath="//a[@class='_2yP-G-qc_1E6Ck1B _2eRDCeQGq1DRmpd3']")
	private List<WebElement> bag;
	public List<WebElement> getBag() {
		return bag;
	}
	
}
