const assets_url = './assets/images/';

export const background_images = [
    {
        'image_name': 'game_background',
        'image_format': 'png',
        'image_url': generateUrlToFile('main_background', 'png'),
    },
    {
        'image_name': 'game_background2',
        'image_format': 'png',
        'image_url': generateUrlToFile('main_background', 'png'),
    },
    {
        'image_name': 'enemy_island',
        'image_format': 'png',
        'image_url': generateUrlToFile('enemy_platform', 'png'),
    },
    {
        'image_name': 'red_monster',
        'image_format': 'png',
        'image_url': generateUrlToFile('monster_1', 'png'),
    },
    {
        'image_name': 'coin',
        'image_format': 'png',
        'image_url': generateUrlToFile('coin', 'png'),
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
    }
];

function generateUrlToFile(fileName, format) {
    return `${assets_url}${fileName}.${format}`;
}
