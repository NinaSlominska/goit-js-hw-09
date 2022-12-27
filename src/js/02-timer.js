import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
let timerId = null;
const btnStart = document.querySelector('[data-start]')
btnStart.setAttribute("disabled", '');
btnStart.addEventListener('click', timeData)
function timeData() {
       timerId = setInterval(() => {
   const input = document.querySelector('#datetime-picker').value
    const timer = convertMs(new Date(input) - new Date())
    document.querySelector('[data-days]').textContent = addLeadingZero(timer.days)
    document.querySelector('[data-hours]').textContent = addLeadingZero(timer.hours)
    document.querySelector('[data-minutes]').textContent =addLeadingZero (timer.minutes)
    document.querySelector('[data-seconds]').textContent =addLeadingZero (timer.seconds)
       }, 1000);
}
function addLeadingZero(value) {
   return String(value).padStart(2, '0')
    
}

console.log(addLeadingZero('2'))
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (new Date() > selectedDates[0]) {
          window.alert("Please choose a date in the future")
        }
        else {
btnStart.removeAttribute("disabled")
        }
    // console.log(selectedDates[0]);
  },
};
const fp = flatpickr("#datetime-picker", options);
// flatpickr(element, {});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
