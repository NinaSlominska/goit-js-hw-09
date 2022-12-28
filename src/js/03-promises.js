import { Notify } from "notiflix";
const form = document.querySelector('.form')
form.addEventListener('submit', formSubmit)
function formSubmit(event) {
  event.preventDefault()
  const { delay, step, amount } = event.target.elements
let delayValue = +delay.value
  for (let index = 1; index <= amount.value; index += 1) {
    createPromise(index, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue+=+step.value
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    },delay)
})
}  
