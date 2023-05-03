const changeDirection = (keyCode) => {
    const direction = mapKeyCode(keyCode);
    // добавляю условие которое проверяет противоположное направеление и только после меняет дирекшн
    if(_hasDirection(state.snake, direction)){
        state.snake.direction = direction;
    }

}

const moveSnake = () => {
    
    //получение головы и направления из состояния, странности при переносе на функцию getHead
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

    if(_getCollisionSnake(newMovementSnake)){
        return true;
        //добавить pop up Для проигрыша
    }


    // удаляем голову( первый элемент массива)
    state.snake.lastPosTail = state.snake.tail.shift();
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

const _hasDirection = (snake, direction) => {
    const headSNake = snake.tail[snake.tail.length - 1];

    if(
        (direction === "left" && headSNake.d !== "right") ||
        (direction === "up" && headSNake.d !== "down") ||
        (direction === "right" && headSNake.d !== "left") ||
        (direction === "down" && headSNake.d !== "up")
    ){
        return true;
    }
    return false;
};

// почему-то не получилось использовать следующую функцию вместо кода в renderGame
// const _checkGrowth = () => {
//     const {snake, food: {apples}} = state;
//     const headSNake = snake.tail[snake.tail.length - 1];

//     if(apples.x === headSNake.x, apples.y === headSNake.y){
//         state.food.didAte = true;
//         state.snake.tail.unshift(state.snake.lastPosTail)
//         state.snake.speed = state.snake.speed - 50;
//     }
// }

const _getCollisionSnake = (headSnake) => {
    const { snake, maps, level } = state;
    const { tail } = snake;
    const map = maps[`map${level}`];

    for(let t = 0; t < tail.length; t += 1){
        if(headSnake.x === tail[t].x && headSnake.y === tail[t].y){
            return true
        }
    }
    for(let m = 0; m < map.cords.length; m += 1){
        if(headSnake.x === map.cords[m].x && headSnake.y === map.cords[m].y){
            return true;
        }
    }

}


    // функция для поиска головы змеи
const _getHeadSnake = (snake) => {
    return state.snake.tail[state.snake.tail.length - 1];
}