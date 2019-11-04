import { background_images } from './images_list.js';

export const gameImages = [];

export class LoadImages {
    constructor() {
        background_images.forEach(element => {
                let image = new Image();
                image.src = element.image_url;
                gameImages.push(image);
        });
        console.log(gameImages);
    }
}