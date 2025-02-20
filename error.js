let countdown = 10;
let timerDisplay = document.getElementById("timer");

function updateTimer() {
    countdown--;
    timerDisplay.textContent = countdown;
    
    if (countdown <= 0) {
        window.location.href = "index.html";
    }
}

setInterval(updateTimer, 1000);
