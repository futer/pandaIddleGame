export class DrawText {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
    }

    drawText(text, fontColor, fontName, fontSize, isBorder) {
        this.ctx.font = `${fontSize}px ${fontName}`;
        this.ctx.fillStyle = fontColor;
        this.ctx.textAlign = "center";

        if (isBorder) {
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = fontColor;
            this.ctx.strokeText(text, this.posX, this.posY);
        } else {
            this.ctx.fillText(text, this.posX, this.posY);
        }
    }
}