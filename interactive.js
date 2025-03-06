// Vocabulary Flashcards
function startFlashcards() {
    const flashcards = [
        { spanish: "Hola", english: "Hello" },
        { spanish: "Adiós", english: "Goodbye" },
        { spanish: "Gracias", english: "Thank you" },
        { spanish: "Por favor", english: "Please" },
        { spanish: "Sí", english: "Yes" },
        { spanish: "No", english: "No" }
    ];
    
    const flashcardsContainer = document.getElementById("flashcards-container");
    flashcardsContainer.innerHTML = ""; // Clear existing content

    flashcards.forEach((card, index) => {
        const flashcardDiv = document.createElement("div");
        flashcardDiv.classList.add("flashcard");
        flashcardDiv.innerHTML = `
            <div class="flashcard-spanish">${card.spanish}</div>
            <div class="flashcard-english">${card.english}</div>
        `;
        flashcardsContainer.appendChild(flashcardDiv);
    });
}

// Grammar Quiz
function startGrammarQuiz() {
    const quizQuestions = [
        { question: "What is the Spanish word for 'book'?", options: ["Libro", "Cuaderno", "Mesa"], correctAnswer: "Libro" },
        { question: "How do you say 'I am' in Spanish?", options: ["Yo soy", "Yo tengo", "Yo hablo"], correctAnswer: "Yo soy" }
    ];

    const quizContainer = document.getElementById("grammar-quiz-container");
    quizContainer.innerHTML = "";

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <p>${q.question}</p>
            <ul>
                ${q.options.map(option => `<li onclick="checkAnswer('${option}', '${q.correctAnswer}')">${option}</li>`).join("")}
            </ul>
        `;

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct answer!");
    } else {
        alert("Try again.");
    }
}

// Word Matching Game
function startMatchingGame() {
    const spanishWords = ["Hola", "Adiós", "Gracias", "Por favor"];
    const englishWords = ["Hello", "Goodbye", "Thank you", "Please"];
    
    // Shuffle the arrays
    const shuffledSpanish = spanishWords.sort(() => Math.random() - 0.5);
    const shuffledEnglish = englishWords.sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById("matching-game-container");
    gameContainer.innerHTML = ""; // Clear the container

    let matchCount = 0;

    shuffledSpanish.forEach((word, index) => {
        const div = document.createElement("div");
        div.classList.add("matching-word");
        div.innerText = word;
        div.onclick = () => checkMatchingGame(word, shuffledEnglish[index]);
        gameContainer.appendChild(div);
    });

    function checkMatchingGame(selectedSpanish, selectedEnglish) {
        if (selectedSpanish === shuffledSpanish[shuffledEnglish.indexOf(selectedEnglish)]) {
            matchCount++;
            if (matchCount === spanishWords.length) {
                alert("Congratulations, you matched all words!");
            }
        } else {
            alert("Try again.");
        }
    }
}

// Fill-in-the-Blank Sentences
function startFillInTheBlank() {
    const sentences = [
        { sentence: "___ es mi amigo.", answer: "Él", options: ["Él", "Ella", "Nosotros"] },
        { sentence: "___ gustan las películas.", answer: "Me", options: ["Me", "Te", "Nosotros"] }
    ];

    const blankContainer = document.getElementById("fill-in-the-blank-container");
    blankContainer.innerHTML = "";

    sentences.forEach((sentence, index) => {
        const sentenceDiv = document.createElement("div");
        sentenceDiv.classList.add("fill-in-the-blank");

        sentenceDiv.innerHTML = `
            <p>${sentence.sentence.replace("___", `<input type="text" id="blank-${index}" />`)}</p>
            <div>
                ${sentence.options.map(option => `<button onclick="checkFillInTheBlank(${index}, '${option}', '${sentence.answer}')">${option}</button>`).join("")}
            </div>
        `;

        blankContainer.appendChild(sentenceDiv);
    });
}

function checkFillInTheBlank(index, selectedAnswer, correctAnswer) {
    const inputElement = document.getElementById(`blank-${index}`);
    if (selectedAnswer === correctAnswer) {
        inputElement.style.borderColor = "green";
        alert("Correct!");
    } else {
        inputElement.style.borderColor = "red";
        alert("Try again.");
    }
}

// Pronunciation Practice (Placeholder Function)
function startPronunciationPractice() {
    alert("Listen to the Spanish words and repeat them!");
}

// Listening Comprehension (Placeholder Function)
function startListeningComprehension() {
    alert("Listen to the audio and answer the questions!");
}

// Progress Tracking (Placeholder Function)
function viewProgress() {
    alert("Viewing your progress!");
}
