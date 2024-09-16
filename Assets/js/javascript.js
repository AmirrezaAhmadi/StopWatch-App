let startTime, updatedTime, difference, interval;
let running = false;

const timeDisplay = document.getElementById("time");

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        interval = setInterval(updateTime, 1000);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(interval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    difference = 0;
    timeDisplay.textContent = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    timeDisplay.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
