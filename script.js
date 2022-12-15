 document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let score = 0;
  let button = document.querySelector(".submit");
  let display = document.querySelector(".display");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");
  


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
let a1 = q1.value
let a2 = q2.value
let a3 = q3.value
let a4 = q4.value
    
if (a1.toLowerCase() === "good")
{
  score += 1;
}
  else if (a1.toLowerCase() === "sleepy")
{
  score += 2;
}
  else if (a1.toLowerCase() === "aggressive")
{
  score += 3;
}
    else if (a1.toLowerCase() === "bored")
{
  score += 4;
}

if (a2.toLowerCase() === "long Island City")
{
  score += 1;
}
  else if (a2.toLowerCase() === "downtown brooklyn")
{
  score += 2;
}
  else if (a2.toLowerCase() === "midtown")
{
  score += 3;
}
    else if (a2.toLowerCase() === "Park Slope")
{
  score += 4;
}

if (a3.toLowerCase() === "yes")
{
  score += 1;
}
  else if (a3.toLowerCase() === "no")
{
  score += 2;
}
  else if (a3.toLowerCase() === "most of the time")
{
  score += 3;
}
    else if (a3.toLowerCase() === "some of the time")
{
  score += 4;
}

if (a4.toLowerCase() === "mornings")
{
  score += 1;
}
  else if (a4.toLowerCase() === "afternoons")
{
  score += 2;
}
  else if (a4.toLowerCase() === "evenings")
{
  score += 3;
}
    else if (a4.toLowerCase() === "nights")
{
  score += 4;
}
 // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

if(score >= 4 && score <= 6)
{
  display.src = "images/A.png";
  display.insertAdjacentHTML("afterEnd","You are the A train")
}

if(score >= 7 && score <= 11)
{
  display.src = "images/R.png";
  display.insertAdjacentHTML("afterEnd","You are the R train")
}

if(score >= 12 && score <= 15)
{
  display.src = "images/5.png";
    display.insertAdjacentHTML("afterEnd","You are the 5 train")
}

if(score === 16)
{
  display.src = "images/G.png";
    display.insertAdjacentHTML("afterEnd","You are the G train")
}

console.log(score)









  };
}