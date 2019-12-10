function showRestartGameAfterFinishAndLoad() {
    if (playerOptions.level === enemy_list.length) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        drawImage(this.ctx, 'game_background', 0, 0, 480, 700, null);

        drawImage(this.ctx, 'table', 60, 280, 280, 45, null);

        DrawOnlyText(this.ctx, 150, 310, 'Restart Game', 'white', 'Bubbleboddy', 22);

        const clickCords = {
            x: 60,
            y: 280,
            endX: 340,
            endY: 325,
        }
        this.canvas.addEventListener('click', (event) => {
            this.actionMgnFc(event, 'restart_game', clickCords);
        });

    }
}

function finishGame() {
    DrawOnlyText(this.ctx, 60, 200, 'You finished game!!', 'black', 'Bubbleboddy', 36);

    drawImage(this.ctx, 'table', 65, 270, 280, 45, null);
    DrawOnlyText(this.ctx, 80, 300, `Your collected gold is ${playerOptions.gold}`, 'white', 'Bubbleboddy', 18);

    drawImage(this.ctx, 'table', 60, 380, 280, 45, null);
    DrawOnlyText(this.ctx, 80, 410, `Your attack is ${playerOptions.attack}`, 'white', 'Bubbleboddy', 18);

    drawImage(this.ctx, 'table', 60, 480, 280, 45, null);
    DrawOnlyText(this.ctx, 150, 510, `Restart game`, 'white', 'Bubbleboddy', 22);

    const clickCords = {
        x: 60,
        y: 480,
        endX: 540,
        endY: 525,
    }

    this.canvas.addEventListener('click', (event) => {
        this.actionMgnFc(event, 'restart_game', clickCords);
    });

    console.clear();
}