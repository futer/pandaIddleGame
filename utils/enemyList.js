import { getFromLocalStorage } from './localStorage.js';

let enemys_list;

if (getFromLocalStorage('monster_list') !== null) {
    enemys_list = JSON.parse(getFromLocalStorage('monster_list'));
} else {
    enemys_list = [
        {
            losthp: 50,
            hp: 50,
            min_gold: 1,
            max_gold: 3,
            width: 300,
            height: 206.33,
            monster_name: 'red_monster',
            platform_number: 'isle_1',
            isBlood: false,
        },
        {
            losthp: 60,
            hp: 60,
            min_gold: 1,
            max_gold: 3,
            width: 300,
            height: 206.33,
            monster_name: 'red_monster',
            platform_number: 'isle_2',
            isBlood: false,
        }
    ];
}

export let enemy_list = enemys_list;

