function checkQuiz() {
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;

  let answer = {
      question1: "a",
      question2: "a",
      question3: "c",
      question4: "b",
      question5: "a",
      question6: "b",
      question7: "c",
      question8: "b",
      question9: "a",
      question10: "a"
  };

  let totalQuestion = Object.keys(answer).length;

  for (let key in answer) {
      let selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected) {
          if (selected.value === answer[key]) {
              score++;
              correctCount++;
          } else {
              wrongCount++;
          }
      } else {
          wrongCount++; // If no answer is selected, count as wrong
      }
  }

  // Store results
  localStorage.setItem("quizScore", score);
  localStorage.setItem("totalQuestion", totalQuestion);
  localStorage.setItem("correctCount", correctCount);
  localStorage.setItem("wrongCount", wrongCount);

  // Redirect to results page
  window.location.href = "result.html";
}
