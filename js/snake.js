const changeDirection = (keyCode) => {
    const direction = mapKeyCode(keyCode);

    state.snake.direction = direction;
}

const moveSnake = () => {
    
    //получение головы и направления из состояния
    const headSnake = state.snake.tail[state.snake.tail.length - 1];
    const direction = state.snake.direction;
    let newMovementSnake;
    console.log("начало движения");
    
    // реализация изменения координат после нажатия на клавишу для изменения отрисовки змейки
    if(direction === "left") {
        newMovementSnake = { x: headSnake.x - 1, y: headSnake.y, d:direction, h: true
        }
        console.log(newMovementSnake)
    } 
    if(direction === "up"){
        newMovementSnake = { x: headSnake.x, y: headSnake.y - 1, d:direction, h: true
        }
    } 
    if(direction === "right"){
        newMovementSnake = { x: headSnake.x + 1, y: headSnake.y, d:direction, h: true
        }
    } 
    if(direction === "down"){
        newMovementSnake = { x: headSnake.x, y: headSnake.y + 1, d:direction, h: true
        }
    }

    newMovementSnake = _setTeleportSnake(state.snake, newMovementSnake);


    // удаляем голову( первый элемент массива)
    state.snake.tail.shift();
    headSnake.h = false;
    // даем новое значение голове
    state.snake.tail.push(newMovementSnake);
}

const _setTeleportSnake = (snake, newHeadSnake) => {
    const { direction } = snake;
    const rowEdge = row - 1;
    
    if(newHeadSnake.x > rowEdge && direction === "right"){
        return  { x: 0, y: newHeadSnake.y, d: newHeadSnake.d, h: newHeadSnake.h }
    } 
    if(newHeadSnake.x < 0 && direction === "left"){
        return  { x: rowEdge, y: newHeadSnake.y, d: newHeadSnake.d, h: newHeadSnake.h }
    }
    if(newHeadSnake.y < 0 && direction === "up"){
        return  { x: newHeadSnake.x, y: rowEdge, d: newHeadSnake.d, h: newHeadSnake.h }
    }
    if(newHeadSnake.y > rowEdge && direction === "down"){
        return  { x: newHeadSnake.x, y: 0, d: newHeadSnake.d, h: newHeadSnake.h }
    }

    return  { x: newHeadSnake.x, y: newHeadSnake.y, d: newHeadSnake.d, h: newHeadSnake.h }
}