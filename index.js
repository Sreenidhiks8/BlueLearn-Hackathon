let salary = 0;
let essentials = 0;
let luxury = 0;
let saved = salary - essentials - luxury;

let get_advisor_data = (data) => {
  document.querySelector("#Advisor").innerHTML =
    "Get in touch with one of our advisors to know more: \n" +
    "Name: " +
    data.first_name +
    " " +
    data.last_name +
    "<br>" +
    "Email: " +
    data.email +
    "<br>" +
    "Phone Number: " +
    data.phone_number;
};
// const request = new Request('https://random-data-api.com/api/users/random_user', {method: 'GET'});
let advisor = null;
fetch("https://random-data-api.com/api/users/random_user")
  .then((response) => response.json())
  .then((data) => (advisor = data))
  .then(() => get_advisor_data(advisor));

let CalcExpense = () => {
  salary = Number(document.querySelector("#salary").value);
  essentials = Number(document.querySelector("#Essentials").value);
  luxury = Number(document.querySelector("#Luxury").value);
  saved = salary - essentials - luxury;

  document.querySelector("#Ideal").innerHTML =
    "Ideal case scenario: <br>" +
    String(salary * 0.5) +
    " should be spent on essentials<br>" +
    String(salary * 0.3) +
    " should be spent on other wants and desires<br>" +
    String(salary * 0.2) +
    " should be saved for investing and savings";

  if (saved < 0) {
    document.querySelector("#Real").innerHTML =
      "You are spending more than required";
    return 0;
  }

  document.querySelector("#Real").innerHTML =
    "Your Scenario: <br>" +
    "Salary: " +
    String(salary) +
    "<br>" +
    "expenditure on essentials: " +
    String(essentials) +
    "<br>Which is " +
    String((essentials * 100) / salary) +
    "% of your salary <br>" +
    "expenditure on luxury: " +
    String(luxury) +
    " <br>hich is " +
    String((luxury * 100) / salary) +
    "% of your salary <br>" +
    "hence you save: " +
    String(saved) +
    "<br>Which is " +
    String((saved * 100) / salary) +
    "% of your salary <br>";

  document.querySelector("#Conclusions").innerHTML = "Conclusions: <br>";

  if (essentials > salary * 0.5)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "You spend more than required on your essentials<br>";
  else if (essentials <= salary * 0.5)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "Your spending on essentials is ideal and/or on the safer side<br>";

  if (luxury > salary * 0.3)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "You spend more than required on your luxury<br>";
  else if (luxury <= salary * 0.3)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "Your spending on luxury is ideal and/or on the safer side<br>";

  if (saved > salary * 0.2)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "Your savings are more than the required ideal savings mark<br>";
  else if (saved < salary * 0.1)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "You savings are too low<br>";
  else if (saved <= salary * 0.2)
    document.querySelector("#Conclusions").innerHTML =
      document.querySelector("#Conclusions").innerHTML +
      "You savings are lesser than the required amount. Make sure to save atleast 10% of your salary, which is " +
      salary * 0.1 +
      "<br>";
};
