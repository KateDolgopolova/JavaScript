'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = "Poly";
//const login = prompt("Введите логин", );

function isLoginValid(login){
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(logins, login){

    if (logins.includes(login)) {
            return false
        }

    return true
}



function addLogin(logins, login){
   if (isLoginValid(login)){
       if(isLoginUnique(logins, login)){
           logins.push(login);
           console.log('Логин успешно добавлен!');
       } else {
           console.log('Такой логин уже используется!');
       }

   } else{
       console.log('Ошибка! Логин должен быть от 4 до 16 символов');
   }
}

addLogin(logins, login);
console.log(logins);