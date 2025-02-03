function checkQuiz() {
  let score = 0;
  let totalQuestion = 6;
}
//coprrect answer

let answer = {
     question: "a"
     question: "a"
     question: "c"
     question: "b"
     question: "a"
     question: "b"
     question: "c"
     question: "b"
     question: "a"
     question: "a"

};

   for (let key in answers) {
    let selected = document.querySelector('input[name="${key}"]:checked');
    if (selected && selected.value === answers[key]) {

    }
   }

   localStorage.setItem("quizScore", score);
   localStorage.setItem("totalQuestion", totalQuestion);

   window.location.href = "result.html";