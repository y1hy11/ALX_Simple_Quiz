function checkAnswer() {
    let correctAnswer = "4";
    
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerHTML = "Correct! Well done.";
    } else {
        document.getElementById("feedback").innerHTML = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);