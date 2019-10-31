export class DrawRectangle {
    constructor(ctx, posx, posy, width, height, color, opacity, isSave) {
        this.ctx = ctx;
        this.posx = posx;
        this.posy = posy;
        this.width = width;
        this.height = height;
        this.color = color;
        this.opacity = opacity;
        this.isSave = isSave;

        this.drawRectangle();
    }

    drawRectangle() {
        if (this.isSave) {
            this.ctx.save();
        }

        if(this.opacity !== null) {
            this.ctx.globalAlpha = this.opacity;
        }

        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posx, this.posy, this.width, this.height);

        if(this.opacity !== null) {
            this.ctx.globalAlpha = 1;
        }

        if (this.isSave) {
            this.ctx.restore();
        }
    }
}
