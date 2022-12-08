 document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let score = 0;
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");
  


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
let q1 = q1.value
let q2 = q2.value
let q3 = q3.value
let q4 = q4.value
    
if (q1.textContent === "good"|| (q1.textContent === "Good" || (q1.textContent === "GOOD")
{
  score += 1;
}
  else if (q1.textContent === "sleepy"||(q1.textContent === 
 "Sleepy" || (q1.textContent === "SLEEPY")
{
  score += 2;
}
  else if (q1.textContent === "aggressive"|| "Aggressive" || "AGGRESSIVE")
{
  score += 3;
}
    else if (q1.textContent === "bored"|| "Bored" || "BORED")
{
  score += 4;
}

if (q2.textContent === "Long Island City"|| q2.textContent === "long island city" || "LONG ISLAND CITY" || "LIC")
{
  score += 1;
}
  else if (q2.textContent === "Downtown Brooklyn"|| "downtown brooklyn" || "")
{
  score += 2;
}
  else if (q2.textContent === "aggressive"|| "Aggressive" || "AGGRESSIVE")
{
  score += 3;
}
    else if (q2.textContent === "bored"|| "Bored" || "BORED")
{
  score += 4;
}

    


    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
  



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.




    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.


    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.






  };
}