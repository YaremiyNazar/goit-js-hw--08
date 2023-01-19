
import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')
const mailEl = document.querySelector('.feedback-form  input')
const textEl = document.querySelector('.feedback-form  textarea')

let formData = {
    email: "",
    message: ""
};
function handleInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
formEl.addEventListener('input', throttle(handleInput, 500));

function handleSubmit(event) {
    event.preventDefault();
    if (mailEl.value === "" || textEl.value === "") {
        return
    }
console.log(formData)
event.currentTarget.reset();
localStorage.removeItem("feedback-form-state");
formData = {}
}    

formEl.addEventListener('submit', handleSubmit);


function populateInput() {
    const savedMessage = localStorage.getItem("feedback-form-state");

    if (savedMessage) {
        formData = JSON.parse(savedMessage);
        textEl.value = formData.message || "";
        mailEl.value = formData.email || "";
     
    }
}
 populateInput();



