function checkAnswer() {
    let correctAnswer = "4";

    let userAnswer = document.querySelector("quiz").value;
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerHTML = "Correct! Well done!";
    } else {
        document.getElementById("feedback").innerHTML = "That's incorrect. Try again!";
    }

}