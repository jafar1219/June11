$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddToCart.feature");
formatter.feature({
  "name": "To view the item in add cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To see the added item in  cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in rei page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user search for \"\u003citem\u003e\" in search box and click search button",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks the item in search results",
  "keyword": "And "
});
formatter.step({
  "name": "The user selects colour, quantity",
  "keyword": "And "
});
formatter.step({
  "name": "The user clicks the add to cart button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the item in cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "item"
      ]
    },
    {
      "cells": [
        "bags"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To see the added item in  cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in rei page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_rei_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user search for \"bags\" in search box and click search button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.the_user_search_for_in_search_box_and_click_search_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the item in search results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.the_user_clicks_the_item_in_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects colour, quantity",
  "keyword": "And "
});
formatter.match({
  "location": "ProductPageSteps.the_user_selects_colour_quantity()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7600 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JAFF-PC\u0027, ip: \u0027192.168.43.157\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\jaff\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63973}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.80, webStorageEnabled: true}\nSession ID: 6714b9e8c04f01204620146d8cdd4f35\n*** Element info: {Using\u003dclass name, value\u003dthumb color-thumb}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByClassName(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByClassName.findElements(By.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy17.get(Unknown Source)\r\n\tat com.rei.stepdefinition.ProductPageSteps.the_user_selects_colour_quantity(ProductPageSteps.java:13)\r\n\tat ✽.The user selects colour, quantity(src/test/resources/features/AddToCart.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user clicks the add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductPageSteps.the_user_clicks_the_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the item in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ShowCartSteps.the_user_should_see_the_item_in_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});