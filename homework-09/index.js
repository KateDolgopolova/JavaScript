'use strict';
let id;
let startTime;
let currentTime;
let isStarted = false;
let wasPaused;
let pausedTime;
let difference;
let allData;
let lapArray = [];
let lapListContainer;


function timer (){
    if(wasPaused){
        difference = getCurrentTime() - startTime + pausedTime;


    } else {
        difference = getCurrentTime() - startTime;
    }
    console.log(difference);
    let milliseconds = Math.floor(difference % 1000);
    let seconds = Math.floor(difference / 1000 % 60);
    let minutes = Math.floor(difference / 1000 / 60 % 60);
    allData = (minutes+":"+seconds+":"+milliseconds);
    let timeContainer = document.querySelector('.time.js-time');
    timeContainer.textContent = allData;
}

function getInitialTime() {
    startTime = new Date;
}

function getCurrentTime() {
    currentTime = new Date;
    return currentTime;
}

//let id = setInterval(timer, 100);
function startTimer() {
    getInitialTime();
    if(!isStarted){
        startBtn.textContent = 'Pause';
        isStarted = true;
        id = setInterval(timer, 100);
        console.log('1')
    } else if(isStarted){
        startBtn.textContent = 'Continue';
        wasPaused = true;
        isStarted = false;
        pausedTime = difference;
        clearInterval(id);
        console.log(pausedTime);
        //как сохранить текущее время так что бы оно продолжало отсчитываться после повторном запуске таймера

    }

}


function resetTimer() {
    let timeContainer = document.querySelector('.time.js-time');
    timeContainer.textContent = '00:00:000';
    isStarted = false;
    wasPaused = false;
    startBtn.textContent = 'Start';
    clearInterval(id);
    lapArray = [];
    lapListContainer.innerHTML = '';

}

function addLap() {
    lapListContainer = document.querySelector('.laps.js-laps');
    let lapListItem = document.createElement('li');
    lapListItem.textContent = allData;
    lapListContainer.append(lapListItem);
    lapArray.push(allData);
}


let startBtn = document.querySelector('.btn.js-start');
startBtn.addEventListener('click', startTimer);
let resetBtn = document.querySelector('.btn.js-reset');
resetBtn.addEventListener('click', resetTimer);
let lapBtn = document.querySelector('.btn.js-take-lap');
lapBtn.addEventListener('click', addLap);