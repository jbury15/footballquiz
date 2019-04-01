function check(){
  var question 1 = document.quiz.question1.value;
  var question 2 = document.quiz.question2.value;
  var question 3 = document.quiz.question3.value;
  var question 4 = document.quiz.question4.value;
  var question 5 = document.quiz.question5.value;
  var question 6 = document.quiz.question6.value;
  var question 7 = document.quiz.question7.value;
  var question 8 = document.quiz.question8.value;
  var question 9 = document.quiz.question9.value;
  var question 10 = document.quiz.question10.value;
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

  var messages = ["Great Job!", "That's just decent", "Your football knowledge is awful"];
  
  var range;
  
    if (correct < 3) {
      range = 2;
    }
  
    if (correct > 0 && correct < 7) {
      score = 1;
    }
  
    if (correct > 8) {
      score = 0;
    }
  
  
  document.getElementById("after_submit1").style.visibility = "visible";
  
  
  
  document.getElementById("message").innerHTML = message[range];
  document.getElementByID("number_correct").innerHTML = "You got " + correct + " correct.";
}
