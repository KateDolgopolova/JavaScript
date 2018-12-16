'use strict';
/*
  Написать приложение для работы с REST сервисом,
  все функции делают запрос и возвращают Promise
  с которым потом можно работать.

  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

  - функция getUserById(id) - должна вернуть пользователя с переданным id.

  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

  - функция removeUser(id) - должна удалять из БД юзера по указанному id.

  - функция updateUser(id, user) - должна обновлять данные пользователя по id.
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
  А так же панелью для вывода результатов операций с бэкендом.
*/

const getBtn = document.querySelector('.get-btn');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');
const updateBtn = document.querySelector('.up-btn');
const API_URL = "https://test-users-api.herokuapp.com/users/";

getBtn.addEventListener('click',actionSelector);
addBtn.addEventListener('click',actionSelector);
deleteBtn.addEventListener('click',actionSelector);
updateBtn.addEventListener('click',actionSelector);

function actionSelector(event){
    event.preventDefault();
    let idField = document.querySelector("#idField");
    let idFieldValue = idField.value;
    let idName = document.querySelector('#idName');
    let idNameValue = idName.value;
    let idAge = document.querySelector('#idAge');
    let idAgeValue = idAge.value;


    switch (event.target.id){
        case "get":
            idFieldValue === "" ? getAllUsers() : getUserById(idFieldValue);
        break;
        case  "add":
            addUser(idNameValue, idAgeValue);
        break;
        case "delete":
            removeUser(idFieldValue);
        break;
        case "update":
            let user = {
                name: idNameValue,
                age: idAge,
            };
            updateUser(idFieldValue, user );
        break;
    }

}

function getAllUsers() {
    fetch(API_URL, {
        method: 'get'
    })
        .then(response => {
            if(response.ok) return response.json();
            throw new Error (`Error: ${response.statusText}`);
        })
        .then (data => console.log(data))
        .catch(err => {
        console.error("Error: ", err);
        })
}

//getBtn.addEventListener('submit',getAllUsers);

function getUserById(idFieldValue) {
    //let id = event.target[0].value;
    fetch(API_URL + idFieldValue, {
        method: 'get'
    })
        .then(response => {
            if(response.ok) return response.json();
            throw new Error (`Error: ${response.statusText}`);
        })
        .then (data => console.log(data.data))
        .catch(err => {
            console.error("Error: ", err);
        })
}
//searchForm.addEventListener('submit', getUserById);

function addUser(idNameValue, idAgeValue) {
    console.log(event)
    fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({ name: idNameValue, age: idAgeValue}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            console.log(response)
            if(response.ok) return response.json();
            throw new Error (`Error: ${response.statusText}`);
        })
        .then (data => console.log(data.id))
        .catch(err => {
            console.error("Error: ", err);
        })

}

function removeUser(idFieldValue) {
    fetch(API_URL + idFieldValue, {
        method: 'delete',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if(response.ok) return response.json();
            throw new Error (`Error: ${response.statusText}`);
        })
        .then (data => console.log(data.id))
        .catch(err => {
            console.error("Error: ", err);
        })
}

function updateUser(idFieldValue, user) {
    fetch(API_URL + idFieldValue, {
        method: 'put',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if(response.ok) return response.json();
            throw new Error (`Error: ${response.statusText}`);
        })
        .then (data => console.log(data.id))
        .catch(err => {
            console.error("Error: ", err);
        })
}


