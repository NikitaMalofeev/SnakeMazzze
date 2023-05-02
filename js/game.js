const onload = () => {

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const renderGame = () => {
        ctx.clearRect(0, 0, width, height);

        for (let y = 0; y < row; y += 1){
            for (let x = 0; x < row; x += 1){
                // координаты игрового поля для отрисовки
                // ctx.fillStyle = "aqua";
                // ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                if(state.food.apples.x === x && state.food.apples.y === x){
                    ctx.fillStyle = colors.apples;
                    ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                };
                
                state.snake.tail.forEach(sn => {
                    if(sn.x === x && sn.y === y) {
                        ctx.fillStyle = colors.snakeBody;
                        ctx.fillRect(x * ceil, y * ceil, ceil, ceil)
                        
                        if(sn.h){
                            ctx.fillStyle = colors.snakeHead;
                            ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                        }
                    }
                });

                //отрисовка карты 
                // выбор карты на основании уровня
                state.maps[`map${state.level}`].cords.forEach(m => {
                    if(m.x === x && m.y === y){
                        ctx.fillStyle = colors.wall;
                        ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                    }
                });
            }
        }
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
        currendSecond = Math.floor(time / 200)

        if(currendSecond > 0) {
            startTime = 0
            // Добавление движения для змеи со скоростью
            moveSnake();
            addNewFood();
            // после каждого нажатия перерисовывается игровое поле 
            renderGame();
        }
    })
    
    const onkeydown = (e) => {
        // установка ключа direction для обьекта
        changeDirection(e.keyCode);
        

        console.log(state.snake)
    }

    document.addEventListener("keydown", onkeydown);
};

window.addEventListener("load", onload);


