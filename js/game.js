const onload = () => {

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const renderGame = () => {
        for (let y = 0; y < row; y += 1){
            for (let x = 0; x < row; x += 1){
                // координаты игрового поля для отрисовки
                // ctx.fillStyle = "aqua";
                // ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                
                state.snake.tail.forEach(sn => {
                    if(sn.x === x && sn.y === y) {
                        ctx.fillStyle = colors.snakeBody;
                        ctx.fillRect(x * ceil, y * ceil, ceil, ceil)
                        
                        if(sn.head){
                            ctx.fillStyle = colors.snakeHead;
                            ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                        }
                    }
                });
            }
        }
    };

    renderGame();
    
    const onkeydown = (e) => {
        // установка ключа direction для обьекта
        changeDirection(e.keyCode);
        // Добавление движения для змеи
        moveSnake();
        // после каждого нажатия перерисовывается игровое поле 
        renderGame();

        console.log(state.snake)
    }

    document.addEventListener("keydown", onkeydown);
};

window.addEventListener("load", onload);


