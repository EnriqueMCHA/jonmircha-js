import { clock, alarm } from "./clockAndAlarm.js";
import hamburgerMenu from "./hamburgerMenu.js";
import { moveBall, shortcuts } from "./keyboard.js";


const d = document;

d.addEventListener('DOMContentLoaded', e => {

    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    clock('#startClock', '#stopClock', '#showTime');

    alarm('#startAlarm', '#stopAlarm', 'assets/alarma.mp3');
})

d.addEventListener('keydown', e => {

    shortcuts(e);
    moveBall(e, '.ball', '.stage');
})