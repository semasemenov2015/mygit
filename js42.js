'use strict';



const settings = {
    rowsCounts: 10,
    colsCount: 10,
    startPositionX: 1,
    startPositionY: 2,
};


const player = {
    x: null,
    y: null,
    init (startx, starty){
        this.x = startx;
        this.y = starty;
    },

    movde(direction){

    },

    getNextPosition(derctoin){},
};

const game = {
    settings,
    player,
    run(){
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();
            const direction = this.getDirection();
            if (direction === -1) {
                return alert('До свидания!')
            } else {
                const nextPoint = this.player.getnextPosition(direction);
                if (this.canPlayerMakeStep(nextPoint)){
                    this.player.movde(nextPoint);
                }
            }
        }

    },

    render(){
        let map = "";

        for (let row = 0; row <= this.settings.rowsCounts; row++) {
            for (let col = 0; col <= this.settings.colsCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }

            }
            map += '\n';
        }
        console.clear();
        console.log(map);

    },

    getDirection(){
        const avaibleDirection = [-1, 1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            const direction = parseInt(prompt(`Введите число куда вы хотите переместится для выхода введите -1`));
            if (!avaibleDirection.includes(direction)) {
                alert(`Необходимо ввести одно из следующих чисел ${avaibleDirection.join(', ')}`);
                continue;

            } else {
                return direction;
            }
        }
    },
};


game.run();

let nextPosition={};
nextPosition.x=player.x;
nextPosition.y=player.y;
switch (direction){
    case 1:
        nextPosition.y++;
        nextPosition.x--;
        break;
    case 2:
        nextPosition.y++;
        break;
    case 3:
        nextPosition.x++;
        nextPosition.y++;
        break;
    case 4:
        nextPosition.x--;
        break;
    case 6:
        nextPosition.x++;
        break;
    case 7:
        nextPosition.x--;
        nextPosition.y--;
        break;
    case 8:
        nextPosition.y--;
        break;
    case 9:
        nextPosition.x++;
        this.y--;
        break;
}