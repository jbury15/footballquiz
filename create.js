function check(){
  var question1 = document.quiz.question1;
  var question2 = document.quiz.question2;
  var question3 = document.quiz.question3;
  var question4 = document.quiz.question4;
  var question5 = document.quiz.question5;
  var question6 = document.quiz.question6;
  var question7 = document.quiz.question7;
  var question8 = document.quiz.question8;
  var question9 = document.quiz.question9;
  var question10 = document.quiz.question10;
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
  
  document.getElementById("message").innerHTML = message[range];
  document.getElementByID("number_correct").innerHTML = "You got " + correct + " correct.";
}
