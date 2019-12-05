export class DrawText {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
    }

    drawText(text, fontColor, fontName, fontSize, isBorder) {
        this.ctx.font = `${fontSize}px ${fontName}`;
        this.ctx.fillStyle = fontColor;

        if (isBorder) {
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = fontColor;
            this.ctx.strokeText(text, this.posX, this.posY);
        } else {
            this.ctx.fillText(text, this.posX, this.posY);
        }
    }
}

export function DrawOnlyText(ctx, posx, posy, text, color, fontName, fontSize) {
    ctx.save();
    ctx.font = `${fontSize}px ${fontName}`;
    ctx.fillStyle = color;
    ctx.fillText(text, posx, posy);
    ctx.restore();
}