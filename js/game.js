const onload = () => {

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const _renderSnake = (snake, x, y) => {
        // координаты игрового поля для отрисовки
        state.snake.tail.forEach(sn => {
            if(sn.x === x && sn.y === y) {
                ctx.fillStyle = colors.snakeBody;
                ctx.fillRect(x * ceil, y * ceil + board.height, ceil, ceil)
                
                if(sn.h){
                    ctx.fillStyle = colors.snakeHead;
                    ctx.fillRect(x * ceil, y * ceil + board.height, ceil, ceil);
                    if(state.food.apples.x === x && state.food.apples.y === y){
                        state.food.didAte = true;
                        //добавляем в последгний элемент массива новый хвост змеи
                        state.snake.tail.unshift(state.snake.lastPosTail)
                        state.snake.speed = state.snake.speed - 10;
                        state.score += 1;
                        console.log("еда сьедена")
                    }
                }
            }
        });
    };

    const _renderFood = (food, x, y) => {
        if(state.food.apples.x === x && state.food.apples.y === y){
            ctx.fillStyle = colors.apples;
            ctx.fillRect(x * ceil, y * ceil + board.height, ceil, ceil);
        };
    };

    //отрисовка карты 
    // выбор карты на основании уровня
    const _renderMap = (map, x, y) => {
        state.maps[`map${state.level}`].cords.forEach(m => {
            if(m.x === x && m.y === y){
                ctx.fillStyle = colors.wall;
                ctx.fillRect(x * ceil, y * ceil + board.height, ceil, ceil);
            }
        });
    };

    const _renderScoreBoard = (score, level) => {
        ctx.fillStyle = colors.popup;
        ctx.fillRect(0, 0, board.width, board.height);

        ctx.fillStyle           = colors.text;
        ctx.font                = board.font;
        ctx.textAlign           = "left";
        ctx.textBaseline        = "top";
        ctx.fillText(score, board.textScore.x, board.textScore.y);

        ctx.fillStyle = colors.apples;
        ctx.fillRect(board.apples.x, board.apples.y, ceil, ceil)

        ctx.fillStyle           = colors.text;
        ctx.font                = board.font;
        ctx.textAlign           = "left";
        ctx.fillText(`Level: ${level}`, board.textLevel.x, board.textLevel.y);

    };

    const _renderPopup = (text) => {
        //центр игрового пространства + координаты откуда рисуется попап
        const   halfW = (width / 2),
                halfH = (height / 2), 
                x     =  halfW - (popup.width / 2),
                y     =  halfH - (popup.height / 2);

        ctx.fillStyle = colors.popup;
        ctx.fillRect(x, y, popup.width, popup.height);

        ctx.fillStyle = colors.text;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = popup.font;
        ctx.fillText(text, halfW, halfH);
    };  

    const renderGame = () => {
        ctx.clearRect(0, 0, width, height);

        const { snake, food, maps, level, score, gameStart, win, gameOver } = state;

        for (let y = 0; y < row; y += 1){
            for (let x = 0; x < row; x += 1){
                
                _renderFood(food, x, y);
                _renderSnake(snake, x, y);
                _renderMap(maps, x, y);
                
                
            }
        }

        if(!gameStart){
            _renderPopup("Тыкай кнопку");
        }
        if(win){
            _renderPopup("Маша ты гений");
        }
        if(gameOver){
            _renderPopup("Не грусти + еще каточка");
        }
        _renderScoreBoard(score, level);
        
    };

    renderGame();

    let startTime           = 0,
        currentTime         = 0,
        time                = 0,
        currendSecond       = 0

    animateRAFInterval.start(() => {
        
        if(startTime === 0) {
            //присваиваем время когда анимация началась
            startTime = new Date().getTime()
        }
        //присваивается с каждым кадром анимации
        currentTime = new Date().getTime()
        time = currentTime - startTime;
        //время с которым двигается змейка
        currendSecond = Math.floor(time / state.snake.speed)

        if(currendSecond > 0) {
            startTime = 0
            if(state.gameStart){

            checkNextLevel();
            checkWin();
            // Добавление движения для змеи со скоростью
            moveSnake();
            
            if(state.food.didAte){
                addNewFood(); 
                console.log("новая еда добавлена")
                
            }
            
            // после каждого нажатия перерисовывается игровое поле 
            renderGame();

            if(state.win){
                animateRAFInterval.cancel();
                document.removeEventListener("keydown", onkeydown);
            }
            if(state.gameOver){
                animateRAFInterval.cancel();
                document.removeEventListener("keydown", onkeydown);
            }
            
            }
        }
    })
    
    const onkeydown = (e) => {
        state.gameStart = true;
        // установка ключа direction для обьекта
        changeDirection(e.keyCode);
        

        console.log(state.snake)
    }

    document.addEventListener("keydown", onkeydown);
};

window.addEventListener("load", onload);


