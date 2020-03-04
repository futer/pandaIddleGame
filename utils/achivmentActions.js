import { achievementList } from './achivmentList.js';
import { drawImage } from './drawFunctions.js';
import { getPlayerName, savePlayerachievement, getFromDBPlayerData } from './localStorage.js';

export const achivmentProps = {
    isOpen: false,
    tab: 1,
};

export function saveAchivmentsInPlayerAccount(achievement) {
    const user = getPlayerName();
    if (user !== null || user !== undefined) {
        savePlayerachievement(user, achievement);
    }
}

export function getAchivmentListFromPlayer() {
    getFromDBPlayerData();
}

export function loadAchivmentToGameAndPlayer() {
    console.log(achievementList);
};

export function checkAchivmentAsComplete() {

};

export function countSpecificAchivment() {

};

export function resetAllAchivment() {

};

export function toggleAchivmentMenu() {
    achivmentProps.isOpen = !achivmentProps.isOpen;
};

export function showAchivmenMenu(ctx) {
    drawImage(ctx, 'shopTable', 50, 90, 300, 500, null);
    drawImage(ctx, 'closeCircleButton', 300, 90, 50, 50, null);

    if (achivmentProps.tab !== 1) {
        drawImage(ctx, 'prev', 70, 510, 50, 50, null);
    }

    if (typeof achievementList[achivmentProps.tab + 1] !== "undefined") {
        drawImage(ctx, 'next', 270, 510, 50, 50, null);
    }

    drawAchievementsInList(ctx);
};

function drawAchievementsInList(ctx) {
    console.log(achievementList[achivmentProps.tab]);
    achievementList[achivmentProps.tab].forEach((achi) => {
        console.log(achi);
    });
}

function resetSpecificAchivment() {

};