export class DrawImages {
    constructor(ctx, imageUrl, imageWidth, imageHeight, scale) {
        this.ctx = ctx;
        this.imageUrl = imageUrl;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.scale = scale;

        this.drawImage();
    }

    drawImage() {
        console.log(123);
    }
}