package stepDefination;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class smokeTest {
		WebDriver dr;
		
		@Given("^Open chrome and start application$")
		public void open_chrome_and_start_application() throws Throwable 
		{   
			System.setProperty("webdriver.chrome.driver", "/Users/sravanthigokula/Documents/space/chromedriver");
		    dr=new ChromeDriver();
		    dr.manage().window().maximize();
		    dr.get("http://www.facebook.com");
		}

		@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
		public void i_enter_valid_username_and_password(String uname, String passwd) throws Throwable 
		{
			dr.findElement(By.id("email")).sendKeys(uname);
			dr.findElement(By.id("pass")).sendKeys(passwd);

		}

		@Then("^user should be able to login successfully$")
		public void user_should_be_able_to_login_successfully() throws Throwable 
		{
			dr.findElement(By.id("loginbutton")).click();
		}
		

	
}
