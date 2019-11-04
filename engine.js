import { DrawImages } from './utils/drawImages.js';
import { DrawRectangle } from './utils/drawRectangle.js';
import { LoadImages } from './utils/loadImages.js';


export class GameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        new DrawRectangle(this.ctx, 0, 0, this.width, this.height, 'black', 1, true);
        let loadImage = new LoadImages();
        loadImage.getNumberOfImageLoaded();
        // new DrawImages(this.ctx, '', 123, 123, 1);
    }
}