import {diffDates, diffToHtml} from "./datecalc.js";

export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export const renderDiff = (firstDate, secondDate, resultBlock) => {
    const diff = diffDates(firstDate, secondDate);
    resultBlock.innerHTML = diffToHtml(diff);
}

export const switcher = forms => {
    forms.forEach(form => {
        form.switch.addEventListener('click', () => {
            forms.forEach(form => {
                form.style.display = 'block';
            })
            form.style.display = 'none';
        })
    })
}