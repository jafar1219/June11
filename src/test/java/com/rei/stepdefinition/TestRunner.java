package com.rei.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features/AddToCart.feature",tags= {},glue="com.rei.stepdefinition",
plugin= {"html: target"},dryRun=false,strict=true)
public class TestRunner {

}
