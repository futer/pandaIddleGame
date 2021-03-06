import { background_images } from './images_list.js';

export const gameImages = {};

export let total = 0;

export class LoadImages {
    
    constructor() {
        this.total = 0;
        background_images.forEach((element, index) => {
                let image = new Image();
                image.src = element.image_url;
                gameImages[element.image_name] = {'image': image, 'isLoaded': false};
                image.onload = () => {
                    gameImages[element.image_name].isLoaded = true;
                    total += 1;
                };
        });
    }
}