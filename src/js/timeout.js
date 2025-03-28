let timeoutId;
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const message = document.getElementById("message");

startButton.addEventListener('click', function () {
    startButton.style.background = "rgb(78, 77, 77)";
    message.textContent = '';
    startButton.disabled = true;
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        startButton.style.background = "#218838";
        startButton.disabled = false;
        message.style.color = "red";
        message.textContent = 'Час вийшов!';
    }, 5000)
})

resetButton.addEventListener('click', function () {
    message.textContent = '';
    startButton.disabled = false;
    startButton.style.background = "#218838";
    clearTimeout(timeoutId);
    message.style.color = "blue";
    message.textContent = 'Таймер скасовано!';
})