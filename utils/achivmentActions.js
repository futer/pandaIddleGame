import { achievementList } from './achivmentList.js';

export const achivmentProps = {
    isOpen = false,
};

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
    console.log(achivmentProps);
};

export function showAchivmenList(ctx, canvas) {

};

function resetSpecificAchivment() {

};