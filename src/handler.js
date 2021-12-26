import {formatError, renderDiff} from "./utils.js";
import {DateTime} from "./luxon.js";
import './howler.js';

const errors = {
    calcDates: 'Для расчета промежутка необходимо заполнить оба поля',
    timer: 'Для запуска таймера необходимо указать время'
}

export const handler = (type, result, event) => {
    result.innerHTML = "";
    event.preventDefault();

    if (type === 'calcDates') {
        let {firstDate, secondDate} = event.target.elements;
        firstDate = firstDate.value, secondDate = secondDate.value;

        if (firstDate && secondDate) {
            renderDiff(firstDate, secondDate, result);
        } else result.innerHTML = formatError(errors[type]);
        return;
    }

    if (type === 'timer') {
        const sound = new Howl({
            src: ['./audio/end.mp3']
        });
        let {time, stop} = event.target.elements;
        time = time.value.split(':');

        if (time.length > 1) {
            let now = DateTime.local().set({milliseconds: 0});
            const end = DateTime.local().set({milliseconds: 0}).plus({minutes: time[0], seconds: time[1]});

            const tick = setInterval(() => {
                now = DateTime.local().set({milliseconds: 0})
                renderDiff(now, end, result);
                if (now >= end) {
                    sound.play();
                    clearInterval(tick);
                }
            }, 1000)

            stop.addEventListener('click', () => {
                clearInterval(tick);
                result.innerHTML = "";
            })

        } else {
            result.innerHTML = formatError(errors[type]);
        }
        return;
    }
}