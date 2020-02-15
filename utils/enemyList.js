import { getFromLocalStorage } from './localStorage.js';

let enemys_list;

if (getFromLocalStorage('monster_list') !== null) {
    enemys_list = JSON.parse(getFromLocalStorage('monster_list'));
} else {
    enemys_list = [
        {
            monster_name: 'goblin_1',
        },
        {
            monster_name: 'goblin_2',
        },
    ];
}

export let enemy_list = enemys_list;

