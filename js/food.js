const addNewFood = () => {
    const cordsNewFood = _getRandomCords(row);
    console.log(cordsNewFood)
    console.log('test')

    if(cordsNewFood){
        state.food.didAte = false;
        state.food.apples.x = cordsNewFood.x;
        state.food.apples.y = cordsNewFood.y;
    }
}

const _getRandomCords = (num) => {
    let random = Math.floor(Math.random() * num);
    console.log(random)
    return random;
};

const getFreeSpace = () => {
    //получение пустого пространство, реструктуризация ряда параметров и их состояния
    const { snake, food, level, maps } = state;
    const { tail } = snake;
    const { didAte } = food;
    // обращение к карте на основании уровня
    const map = maps[`map${level}`];
    let isNewCordsFood = true,
        x, y;

    if(!didAte){
        return false
    }

    //генерация новых координат на основе row 
    while(isNewCordsFood){
        x = _getRandomCords(row);
        y = _getRandomCords(row);
        //поиск свободных координат
        for(let t = 0; t < tail.length; t +=1){
            if(tail[t].x === x && tail[t].y === y){
                isNewCordsFood = true;
                break;
            } else {
                isNewCordsFood = false;
            }
        }

        for(let m = 0; m < map.cords.length; m +=1){
            if(map.cords[m].x === x && map.cords[m].y === y){
                isNewCordsFood = true;
                break;
            } else {
                isNewCordsFood = false;
            }
        }

        if(isNewCordsFood){
            continue;
        }
    }
    console.log("проверка работы")
    return { x, y }
}