/*

  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';


const login = prompt("Введите логин", '');

if (login === "") {
    alert('Доступ запрещен');
} else if (login === adminLogin) {
    const password = prompt("Введите пароль", '');
    if (password === "") {
        alert('Доступ запрещен');
    } else if (password === adminPassword) {
        alert('Добро пожаловать!');
    } else {
        alert('Отменено пользователем');
    }

} else {
    alert('Отменено пользователем');
}

