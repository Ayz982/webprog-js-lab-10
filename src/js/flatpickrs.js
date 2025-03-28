import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
    const datetimePicker = document.getElementById("datetime-picker");
    const startButton = document.querySelector("[data-start]");  
    const daysEl = document.querySelector("[data-days]");
    const hoursEl = document.querySelector("[data-hours]");
    const minutesEl = document.querySelector("[data-minutes]");
    const secondsEl = document.querySelector("[data-seconds]");

    let userSelectedDate = null;
    let countdownInterval = null;

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            userSelectedDate = selectedDates[0];

            if (userSelectedDate && userSelectedDate > new Date()) {
                startButton.disabled = false;
                startButton.classList.add("active");  
                hideAlert();
            } else {
                startButton.disabled = true;
                startButton.classList.remove("active"); 
                showAlert("Please choose a date in the future");
            }
        },
    };

    flatpickr(datetimePicker, options);

    function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        return { days, hours, minutes, seconds };
    }

    function addLeadingZero(value) {
        return String(value).padStart(2, "0");
    }

    function showAlert(message) {
        iziToast.error({
            title: "Error",
            message: message,
            position: "topRight",
        });
    }

    function hideAlert() {
        iziToast.destroy();
    }

    startButton.addEventListener("click", () => {
        if (!userSelectedDate) return;

        datetimePicker.disabled = true;
        startButton.disabled = true;
        startButton.classList.remove("active");  

        countdownInterval = setInterval(() => {
            const now = new Date();
            const timeDifference = userSelectedDate.getTime() - now.getTime();

            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                iziToast.success({
                    title: "Countdown Finished!",
                    message: "The countdown has reached zero!",
                    position: "topRight",
                });
                datetimePicker.disabled = false;
                daysEl.textContent = "00";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";
                return;
            }

            const { days, hours, minutes, seconds } = convertMs(timeDifference);

            daysEl.textContent = addLeadingZero(days);
            hoursEl.textContent = addLeadingZero(hours);
            minutesEl.textContent = addLeadingZero(minutes);
            secondsEl.textContent = addLeadingZero(seconds);
        }, 1000);
    });
});
