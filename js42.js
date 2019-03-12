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
    }
};

const game = {
    settings,
    player,
    run(){
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        this.render();
    },

    render(){
        let map = "";

        for (let row=0; row <= this.settings.rowsCounts; row++) {
            for(let col=0; col<=this.settings.colsCount; col++){
                map+='x ';
            }
            map += '\n';
        }
        console.log(map);

    }
};

game.run();