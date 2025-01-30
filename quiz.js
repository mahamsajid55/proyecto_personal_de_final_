
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    let score = 0;
  
    // Check Question 1
    const question1Answer = document.querySelector('input[name="question1"]:checked');
    if (question1Answer && question1Answer.value === 'a') {
      score++;
    }
  
    // Check Question 2
    const question2Answer = document.querySelector('input[name="question2"]:checked');
    if (question2Answer && question2Answer.value === 'b') {
      score++;
    }
  
    // Check Question 3
    const question3Answer = document.querySelector('input[name="question3"]:checked');
    if (question3Answer && question3Answer.value === 'a') {
      score++;
    }
  
    // Check Question 4
    const question4Answer = document.querySelector('input[name="question4"]:checked');
    if (question4Answer && question4Answer.value === 'b') {
      score++;
    }
  
    // Check Question 5
    const question5Answer = document.querySelector('input[name="question5"]:checked');
    if (question5Answer && question5Answer.value === 'a') {
      score++;
    }
  
    // Check Question 6
    const question6Answer = document.querySelector('input[name="question6"]:checked');
    if (question6Answer && question6Answer.value === 'b') {
      score++;
    }
  
    // Check Question 7
    const question7Answer = document.querySelector('input[name="question7"]:checked');
    if (question7Answer && question7Answer.value === 'a') {
      score++;
    }
  
    // Check Question 8
    const question8Answer = document.querySelector('input[name="question8"]:checked');
    if (question8Answer && question8Answer.value === 'b') {
      score++;
    }
  
    // Check Question 9
    const question9Answer = document.querySelector('input[name="question9"]:checked');
    if (question9Answer && question9Answer.value === 'a') {
      score++;
    }
  
    // Check Question 10
    const question10Answer = document.querySelector('input[name="question10"]:checked');
    if (question10Answer && question10Answer.value === 'a') {
      score++;
    }
  
    // Show result message
    const result = document.getElementById('result');
    result.textContent = `You scored ${score} out of 10.`;
  
    // Optionally, you could provide more feedback based on the score:
    if (score === 10) {
      result.style.color = 'green';
    } else if (score >= 7) {
      result.style.color = 'orange';
    } else {
      result.style.color = 'red';
    }
  });
  