'use strict';


/*Создать функцию, генерирующую шахматную доску. При этом можно использовать
 любые html-теги по своему желанию. Доска должна быть разлинована соответствующим
 образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от
 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/

/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */

const chess = {
    figures: [
        {name: 'p', color: 'b', pos: 'a2'},
        {name: 'p', color: 'b', pos: 'b2'},
        {name: 'p', color: 'b', pos: 'c2'},
        {name: 'p', color: 'b', pos: 'd2'},
        {name: 'p', color: 'b', pos: 'e2'},
        {name: 'p', color: 'b', pos: 'f2'},
        {name: 'p', color: 'b', pos: 'g2'},
        {name: 'p', color: 'b', pos: 'h2'},
        {name: 'p', color: 'w', pos: 'a7'},
        {name: 'p', color: 'w', pos: 'b7'},
        {name: 'p', color: 'w', pos: 'c7'},
        {name: 'p', color: 'w', pos: 'd7'},
        {name: 'p', color: 'w', pos: 'e7'},
        {name: 'p', color: 'w', pos: 'f7'},
        {name: 'p', color: 'w', pos: 'g7'},
        {name: 'p', color: 'w', pos: 'h7'},
        {name: 'r', color: 'b', pos: 'a1'},
        {name: 'r', color: 'b', pos: 'h1'},
        {name: 'r', color: 'w', pos: 'a8'},
        {name: 'r', color: 'w', pos: 'h8'},
        {name: 'k', color: 'b', pos: 'b1'},
        {name: 'k', color: 'b', pos: 'g1'},
        {name: 'k', color: 'w', pos: 'b8'},
        {name: 'k', color: 'w', pos: 'g8'},
        {name: 'b', color: 'b', pos: 'c1'},
        {name: 'b', color: 'b', pos: 'f1'},
        {name: 'b', color: 'w', pos: 'c8'},
        {name: 'b', color: 'w', pos: 'f8'},
        {name: 'Q', color: 'b', pos: 'd1'},
        {name: 'Q', color: 'w', pos: 'e8'},
        {name: 'K', color: 'b', pos: 'e1'},
        {name: 'K', color: 'b', pos: 'd8'},

    ],
    figureHtml: {
        pw: '&#9817;',
        pb: '&#9823;',
        rb: '&#9820;',
        rw: '&#9813;',
        kb: '&#9822;',
        kw: '&#9816;',
        bb: '&#9821;',
        bw: '&#9815;',
        Qb: '&#9819;',
        Qw: '&#9813;',
        Kb: '&#9818;',
        Kw: '&#9812;',
    },
    renderFigure(){

        const figure = this.figures[0];
        const figureHtmlProperty = figure.name + figure.color;
        const figureCode = this.figureHtml[figureHtmlProperty];
        return figureCode;
    },

    gameContainerEl: document.getElementById('game'),


    renderMap() {
        const arrLiter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',];
        for (let row = 0; row <= 9; row++) {
            let num=0;
            const trElement = document.createElement('tr');
            this.gameContainerEl.appendChild(trElement);


            for (let col = 0; col <= arrLiter.length + 1; col++) {
                if (col >= 1 && col < 9 && (row < 1 || row === 9)) {
                    let liter = arrLiter[col - 1];
                    const tdElement = document.createElement('td');
                    trElement.appendChild(tdElement).innerText = liter;
                    tdElement.setAttribute('data',num);


                } else if ((row >= 1 && row < 9) && (col === 0 || col === 9)) {
                    const tdElement = document.createElement('td');
                    trElement.appendChild(tdElement).innerText = row;
                    trElement.setAttribute('data-tr',row);

                } else {
                    if ((row >= 1 && row < 9) && (row % 2 !== 0) && this.isCellIsBlack(row, col)) {
                        const tdElement = document.createElement('td');
                        trElement.appendChild(tdElement).style.backgroundColor = 'grey';
                        tdElement.setAttribute('data',num);
                        num++;


                    } else if ((row >= 1 && row < 9) && (row % 2 === 0) && this.isCellIsBlack2(row, col)) {
                        const tdElement = document.createElement('td');
                        trElement.appendChild(tdElement).style.backgroundColor = 'grey';
                        tdElement.setAttribute('data',num);
                        num++;

                    } else {
                        const tdElement = document.createElement('td');
                        trElement.appendChild(tdElement);
                        if(row>=1&&row<9)
                        tdElement.setAttribute('data',num);
                        num++;


                    }
                }
                num++;

            }


        }
    },

    /**
     * Определяет является ли ячейка черной.
     * @param {int} rowNum Номер в строке.
     * @param {int} colNum Номер в колонке.
     * @returns {boolean} true, если ячейка должна быть черной, иначе false.
     */
    isCellIsBlack(rowNum, colNum) {
        if (rowNum % 2 != 0 && colNum % 2 != 0) {
            return false;
        } else {
            return true;
        }


    },
    isCellIsBlack2(rowNum, colNum) {
        if (rowNum % 2 === 0 && colNum % 2 === 0) {
            return false;
        } else {
            return true;
        }
    },


};


/**
 * Определяет является ли ячейка черной.
 * @param {int} rowNum Номер в строке.
 * @param {int} colNum Номер в колонке.
 * @returns {boolean} true, если ячейка должна быть черной, иначе false.
 */


// Запускаем метод отображения карты.
chess.renderMap();



