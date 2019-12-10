import { GameEngine } from './engine.js';
import { LoadImages, gameImages } from './utils/loadImages.js';
import { background_images } from './utils/images_list.js';

class InitGame {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.id = 'pandaIddleGame'
        this.canvas.width = 400;
        this.canvas.height = 700;

        this.loadedImages = [];

        document.body.appendChild(this.canvas);

        new LoadImages();
        
        let checkImages = setInterval(() => {
            const keys = Object.entries(gameImages);
            this.loadedImages = [];
            keys.forEach(element => {
                if (element[1].isLoaded) {
                    this.loadedImages.push(element[1].isLoaded);
                }

            });

            if (this.loadedImages.length === background_images.length) {
                new GameEngine(this.ctx, this.canvas, this.canvas.width, this.canvas.height);
                clearInterval(checkImages);
            }
        }, 100);
    }
}

new InitGame();