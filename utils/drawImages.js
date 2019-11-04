export class DrawImages {
    constructor(ctx, imageName, imageWidth, imageHeight, scale) {
        this.ctx = ctx;
        this.imageName = imageName;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.scale = scale;

        this.drawImage();
    }

    drawImage() {
        console.log(123);
    }

}