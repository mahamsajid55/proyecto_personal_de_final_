function checkQuiz() {
  let score = 0;
  let totalQuestion = 6;
}
//coprrect answer

let answer = {
     question1: "a"
     question2: "a"
     question3: "c"
     question4: "b"
     question5: "a"
     question6: "b"
     question7: "c"
     question8: "b"
     question9: "a"
     question10: "a"

};

   for (let key in answers) {
    let selected = document.querySelector('input[name="${key}"]:checked');
    if (selected && selected.value === answers[key]) {

    }
   }

   localStorage.setItem("quizScore", score);
   localStorage.setItem("totalQuestion", totalQuestion);

   window.location.href = "result.html";