const assets_url = './assets/images/';

export const background_images = [
    {
        image_name: 'background_1',
        image_format: 'png',
        image_url: generateUrlToFile('background_1', 'png'),
    },
    {
        image_name: 'background_2',
        image_format: 'png',
        image_url: generateUrlToFile('background_2', 'png'),
    },
    {
        image_name: 'background_3',
        image_format: 'png',
        image_url: generateUrlToFile('background_3', 'png'),
    },
    {
        image_name: 'background_4',
        image_format: 'jpg',
        image_url: generateUrlToFile('background_4', 'jpg'),
    },
    {
        image_name: 'background_5',
        image_format: 'png',
        image_url: generateUrlToFile('background_5', 'png'),
    },
    {
        image_name: 'background_6',
        image_format: 'jpg',
        image_url: generateUrlToFile('background_6', 'jpg'),
    },
    {
        image_name: 'background_7',
        image_format: 'jpg',
        image_url: generateUrlToFile('background_7', 'jpg'),
    },
    {
        image_name: 'enemy_island',
        image_format: 'png',
        image_url: generateUrlToFile('enemy_platform', 'png'),
    },
    {
        image_name: 'goblin_1',
        image_format: 'png',
        image_url: generateUrlToFile('goblin_1', 'png'),
    },
    {
        image_name: 'coin',
        image_format: 'png',
        image_url: generateUrlToFile('coin', 'png'),
    },
    {
        image_name: 'attack',
        image_format: 'png',
        image_url: generateUrlToFile('attack', 'png'),
    },
    {
        image_name: 'panel_up',
        image_format: 'png',
        image_url: generateUrlToFile('up', 'png'),
    },
    {
        image_name: 'panel_down',
        image_format: 'png',
        image_url: generateUrlToFile('down', 'png'),
    },
    {
        image_name: 'button_true',
        image_format: 'png',
        image_url: generateUrlToFile('button_true', 'png')
    },
    {
        image_name: 'button_false',
        image_format: 'png',
        image_url: generateUrlToFile('button_false', 'png')
    },
    {
        image_name: 'table',
        image_format: 'png',
        image_url: generateUrlToFile('table', 'png')
    },
    {
        image_name: 'shopTable',
        image_format: 'png',
        image_url: generateUrlToFile('shopTable', 'png'),

    },
    {
        image_name: 'closeCircleButton',
        image_format: 'png',
        image_url: generateUrlToFile('closeCircleButton', 'png'),
        
    },
    {
        image_name: 'button',
        image_format: 'png',
        image_url: generateUrlToFile('button', 'png'),
    },
    {
        image_name: 'bronze_sword',
        image_format: 'png',
        image_url: generateUrlToFile('bronze_sword', 'png'),
    },
    {
        image_name: 'wooden_sword',
        image_format: 'png',
        image_url: generateUrlToFile('wooden_sword', 'png'),
    },
    {
        image_name: 'orc_sword',
        image_format: 'png',
        image_url: generateUrlToFile('orc_sword', 'png'),
    },
    {
        image_name: 'golden_sword',
        image_format: 'png',
        image_url: generateUrlToFile('golden_sword', 'png'),
    },
    {
        image_name: 'isle_1',
        image_format: 'png',
        image_url: generateUrlToFile('isle_1', 'png'),
    },
    {
        image_name: 'isle_2',
        image_format: 'png',
        image_url: generateUrlToFile('isle_2', 'png'),
    },
    {
        image_name: 'splash-blood',
        image_format: 'png',
        image_url: generateUrlToFile('splash-blood', 'png'),
    },
    {
        image_name: 'next',
        image_format: 'png',
        image_url: generateUrlToFile('next', 'png'),
    },
    {
        image_name: 'prev',
        image_format: 'png',
        image_url: generateUrlToFile('prev', 'png'),
    },
    {
        image_name: 'heal',
        image_format: 'png',
        image_url: generateUrlToFile('heal', 'png'),
    },
    {
        image_name: 'star_1',
        image_format: 'png',
        image_url: generateUrlToFile('star_1', 'png'),
    },
    {
        image_name: 'star_2',
        image_format: 'png',
        image_url: generateUrlToFile('star_2', 'png'),
    },
    {
        image_name: 'star_3',
        image_format: 'png',
        image_url: generateUrlToFile('star_3', 'png'),
    },
    {
        image_name: 'ice_sword',
        image_format: 'png',
        image_url: generateUrlToFile('ice_sword', 'png'),
    },
    {
        image_name: 'wind_sword',
        image_format: 'png',
        image_url: generateUrlToFile('wind_sword', 'png'),
    },
    {
        image_name: 'cat_sword',
        image_format: 'png',
        image_url: generateUrlToFile('cat_sword', 'png'),
    }, 
];

function generateUrlToFile(fileName, format) {
    return `${assets_url}${fileName}.${format}`;
}