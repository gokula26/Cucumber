$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAppli.feature");
formatter.feature({
  "line": 1,
  "name": "Test facebook smoke scenarios",
  "description": "",
  "id": "test-facebook-smoke-scenarios",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"urmilareddy.billapati@gmail.com\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 3919525362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urmilareddy.billapati@gmail.com",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 53
    }
  ],
  "location": "smokeTest.i_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 461325555,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1266720015,
  "status": "passed"
});
});