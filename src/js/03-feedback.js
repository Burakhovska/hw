import { throttle } from "lodash";
const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

const getKey = localStorage.getItem(localStorageKey);
if(getKey){
    const {email, message} = JSON.parse(getKey);
    feedbackForm.elements.email.value = email|| "";
    feedbackForm.elements.message.value = message || "";
}

    feedbackForm.addEventListener("input", throttle(onThrottle, 500));
    function onThrottle() {
        const email = feedbackForm.elements.email.value;
        const message = feedbackForm.elements.message.value;
        const formValue = {email, message};
    localStorage.setItem(localStorageKey, JSON.stringify(formValue));
      };
      
      feedbackForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const email = feedbackForm.elements.email.value;
        const message = feedbackForm.elements.message.value;
        const formValue = {email, message};
        console.log(formValue)
        localStorage.removeItem(localStorageKey);
        feedbackForm.reset();

      });