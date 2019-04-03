function check(){
  var question1 = document.getElementById("q1").question1;
  var question2 = document.getElementById("q2").question1;
  var question3 = document.getElementById("q3").question1;
  var question4 = document.getElementById("q4").question1;
  var question5 = document.getElementById("q5").question1;
  var question6 = document.getElementById("q6").question1;
  var question7 = document.getElementById("q7").question1;
  var question8 = document.getElementById("q8").question1;
  var question9 = document.getElementById("q9").question1;
  var question10 = document.getElementById("q10").question1;
  var correct = 0;
  
     if (question1 == "4") {
       correct++;
     }
    if (question2 == "6") {
       correct++;
     }
    if (question3 == "0") {
       correct++;
     }
    if (question4 == "5") {
       correct++;
     }
    if (question5 == "0") {
       correct++;
     }
    if (question6 == "5") {
        correct++;
     }
    if (question7 == "1") {
       correct++;
     }
    if (question8 == "0") {
       correct++;
     }
    if (question9 == "1") {
       correct++;
     }
    if (question10== "3") {
       correct++;
     }
  console.log(correct)
  var messages = ["Great Job!", "That's just decent", "Your football knowledge is awful"];
  
  var range;
  
    if (correct < 3) {
      range = 2;
    }
  
    if (correct >= 3 && correct < 7) {
      range = 1;
    }
  
    if (correct >= 7) {
      range = 0;
    }
  
  
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
