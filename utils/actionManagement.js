export function actionManagement(event, type) {

    switch (true) {
        case type === 'attack_monster':
            if (event.layerX >= 75 && event.layerX <= 340 && event.layerY >= 180 && event.layerY <= 530) {
                console.log('attacked');
            };
            break;

        default:
            break;
    }
};