'use strict';
const sharm = 15;
const hurgada = 25;
const taba = 6;

const value = prompt('Количество необходимых мест', '');
var valueNumeric = parseInt(value);


if ((valueNumeric > 0) && (Number(value) === valueNumeric)) {
    if (taba >= valueNumeric) {
        const groupSelected = prompt('Есть место в группах Taba, Sharm, Hurgada. Выберите группу', "");
        switch (groupSelected) {
            case "Taba":
                const yesTaba = confirm('Есть место в группе Taba, хотели бы вы к ней присоединится?');
                if (yesTaba === true) {
                    alert('Приятного путешествия в группе Taba');
                }
                else {
                    alert('Нам очень жаль, приходите еще!');
                }
                break;

            case "Sharm":
                const yesSharm = confirm('Есть место в группе Sharm, хотели бы вы к ней присоединится?');
                if (yesSharm === true) {
                    alert('Приятного путешествия в группе Sharm');
                }
                else {
                    alert('Нам очень жаль, приходите еще!');
                }
                break;

            case "Hurgada":
                const yesHuganda = confirm('Есть место в группе Hurgada, хотели бы вы к ней присоединится?');
                if (yesHuganda === true) {
                    alert('Приятного путешествия в группе Hurgada');
                }
                else {
                    alert('Нам очень жаль, приходите еще!');
                }
                break;

            default : {
                alert('Нам очень жаль, приходите еще!');
            }
        }
    } else if (sharm >= valueNumeric) {
        const groupSelected = prompt('Есть место в группах Sharm, hurgada. Выберите группу', "");
        switch (groupSelected) {

            case "Sharm":
                const yesSharm = confirm('Есть место в группе Sharm, хотели бы вы к ней присоединится?');
                if (yesSharm === true) {
                    alert('Приятного путешествия в группе Sharm');
                }
                else {
                    alert('Нам очень жаль, приходите еще!');
                }
                break;

            case "Hurgada":
                const yesHuganda = confirm('Есть место в группе Hurgada, хотели бы вы к ней присоединится?');
                if (yesHuganda === true) {
                    alert('Приятного путешествия в группе Hurgada');
                }
                else {
                    alert('Нам очень жаль, приходите еще!');
                }
                break;

            default : {
                alert('Нам очень жаль, приходите еще!');
            }
        }
    } else if (hurgada >= valueNumeric) {
        const yesHuganda = confirm('Есть место в группе Hurgada, хотели бы вы к ней присоединится?');
        if (yesHuganda === true) {
            alert('Приятного путешествия в группе Hurgada');
        }
        else {
            alert('Нам очень жаль, приходите еще!');
        }

    } else {
        alert('Извините, столько мест нет ни в одной группе!');
    }
} else {
    alert('Ошибка ввода');
}


