const changeDirection = (keyCode) => {
    const direction = mapKeyCode(keyCode);

    state.snake.direction = direction;
}

const moveSnake = () => {
    
    //получение головы и направления из состояния
    const headSnake = state.snake.tail[state.snake.tail.length - 1];
    const direction = state.snake.direction;
    let newMovementSnake;
    console.log("начало мув")
    
    // реализация изменения координат после нажатия на клавишу для изменения отрисовки змейки
    if(direction === "left") {
        newMovementSnake = { x: headSnake.x = x - 1, y: headSnake.y, d:direction, h: true
        }
        console.log(newMovementSnake)
    } else if(direction === "up"){
        newMovementSnake = { x: headSnake.x = x, y: headSnake.y + 1, d:direction, h: true
        }
    } else if(direction === "right"){
        newMovementSnake = { x: headSnake.x = x + 1, y: headSnake.y, d:direction, h: true
        }
    } else if(direction === "down"){
        newMovementSnake = { x: headSnake.x = x, y: headSnake.y - 1, d:direction, h: true
        }
    }
    // удаляем голову( первый элемент массива)
    state.snake.tail.shift();

    state.snake.tail.push(newMovementSnake);
}