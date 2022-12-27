const btnStart=document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
const body = document.querySelector('body')
let timerId = null;
btnStart.addEventListener('click', changColor)
btnStop.setAttribute("disabled", '');
function changColor(event) {
   timerId = setInterval(() => {
    body.style.backgroundColor=getRandomHexColor();
   }, 1000);
    btnStart.setAttribute("disabled", '');
    btnStop.removeAttribute("disabled")
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.removeAttribute("disabled")
 btnStop.setAttribute("disabled", '');
});