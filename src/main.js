import {switcher} from "./utils.js";
import {handler} from "./handler.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timerForm = document.getElementById("timer");
const timerResult = document.getElementById("timer__result");
const forms = document.querySelectorAll('form');

switcher(forms);

dateCalcForm.addEventListener("submit", (event) => {
    handler('calcDates', dateCalcResult, event);
});
timerForm.addEventListener("submit", (event) => {
    handler('timer', timerResult, event);
});