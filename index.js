import { GameEngine } from './engine.js';

class InitGame {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'pandaIddleGame'
        this.canvas.width = 400;
        this.canvas.height = 700;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');

        this.gameEngine = new GameEngine(this.ctx, this.canvas.width, this.canvas.height);
    }
}

const initGame = new InitGame();

























// import { iddlespeed, gameTimeData, userData } from './config.js';

// const gameTime = setInterval(() => {
//     addHour();
//     constructTimeSection();
//     constructIncome();
// }, iddlespeed);

// function addHour() {
//     if (gameTimeData.hour !== 24) {
//         gameTimeData.hour++;
//     } else {
//         gameTimeData.hour = 1;
//         addDay();
//     }
// }

// function addDay() {
//     if (!isEndOfMonth()) {
//         gameTimeData.day++;
//     } else {
//         gameTimeData.day = 1;
//         addMonth();
//     }
// };

// function isEndOfMonth() {
//     let endOfMonth = false;

//     switch (true) {
//         case (gameTimeData.month === 1 && gameTimeData.day === 31):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 2 && gameTimeData.day === 28):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 3 && gameTimeData.day === 31):
//             endOfMonth = true;
//             break;
//         case (gameTimeData.month === 4 && gameTimeData.day === 30):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 5 && gameTimeData.day === 31):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 6 && gameTimeData.day === 30):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 7 && gameTimeData.day === 31):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 8 && gameTimeData.day === 31):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 9 && gameTimeData.day === 30):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 10 && gameTimeData.day === 31):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 11 && gameTimeData.day === 30):
//             endOfMonth = true;
//             break;

//         case (gameTimeData.month === 12 && gameTimeData.day === 30):
//             endOfMonth = true;
//             break;

//         default:
//             endOfMonth = false;
//             break;
//     }

//     return endOfMonth;
// }

// function addMonth() {
//     if (gameTimeData.month !== 12) {
//         gameTimeData.month++;
//     } else {
//         gameTimeData.month = 1;
//         gameTimeData.year ++;
//     }
// }

// function constructTimeSection() {
//     const container = document.getElementById('game-time');
//     container.innerText = printTime(gameTimeData.hour ,gameTimeData.day, gameTimeData.month, gameTimeData.year);
// }

// function printTime(hour, day, month, year){
//     return `Hour ${hour} Day ${day} Month ${month} Year ${year}`; 
// }

// function constructIncome() {
//     const container = document.getElementById('user-income');
//     addHourlyIncome();
//     container.innerText = printIncome(userData.cash, userData.hourlyIncome);
// }

// function printIncome(cash, income) {
//     return `Cash ${cash} Income ${income}`;
// }

// function addHourlyIncome() {
//     userData.cash += userData.hourlyIncome;
// };