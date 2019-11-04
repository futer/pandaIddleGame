import { background_images } from './images_list.js';

export const gameImages = {};

let imageLoaded = '';

export class LoadImages {
    constructor() {
        background_images.forEach((element, index) => {
                let image = new Image();
                image.src = element.image_url;
                gameImages[element.image_name] = image;
                image.onload = () => {
                    imageLoaded = `${index + 1} / ${background_images.length}`;
                    console.log(123);
                };

        });
        console.log(gameImages);
    }

    getNumberOfImageLoaded() {
        console.log(imageLoaded);
        return imageLoaded;
    }
}