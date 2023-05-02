// в cords хрянятся препятствия, completed количество очков для прохождения
const map1 ={
    cords: [],
    completed: 394
};

const map2 ={
    cords: [],
    completed: 394
};

const map3 ={
    cords: [],
    completed: 394
};

const map4 ={
    cords: [],
    completed: 394
};

// отрисовываем карту принимая карту, начальную координату, начальное и конечное число
const generateMap = (map, axis, from, to, numRestAxis) => {
    const countIteration = to - from;
    // если начальная координата x то RestAxis y
    const getRestAxis = (axis === "x") ? "y" : "x";
    // цикл создающий нужное количество координат 
    let cords;

    for(let i = 0; i < countIteration; i += 1 ){
        // генерация диапазона для отрисовки по координатам, используем вычисляемые свойства обьекта
    cords = { [axis]: from + i, [getRestAxis]: numRestAxis};
    // заносим каждой итерацией новый обьект в массив cords 
    map.cords.push(cords);
    }
    
    map.completed = map.completed - countIteration
};

generateMap(map1, "x", 5, 14, 4);
generateMap(map1, "x", 3, 16, 9);
generateMap(map1, "x", 3, 16, 10);
generateMap(map1, "x", 5, 14, 15);

generateMap(map2, "x", 0, 20, 0);
generateMap(map2, "y", 1, 20, 19);
generateMap(map2, "x", 0, 19, 19);
generateMap(map2, "y", 1, 19, 0);
generateMap(map2, "x", 2, 5, 2);
generateMap(map2, "x", 2, 5, 3);
generateMap(map2, "x", 2, 5, 4);
generateMap(map2, "x", 2, 5, 15);
generateMap(map2, "x", 2, 5, 16)
generateMap(map2, "x", 2, 5, 17);;
generateMap(map2, "x", 15, 18, 15);
generateMap(map2, "x", 15, 18, 16);
generateMap(map2, "x", 15, 18, 17);
generateMap(map2, "x", 15, 18, 2);
generateMap(map2, "x", 15, 18, 3);
generateMap(map2, "x", 15, 18, 4);

generateMap(map3, "x", 0, 20, 0);
generateMap(map3, "y", 2, 18, 19);
generateMap(map3, "x", 0, 20, 19);
generateMap(map3, "y", 2, 18, 0);
generateMap(map3, "x", 7, 13, 3);
generateMap(map3, "x", 7, 13, 4);
generateMap(map3, "x", 7, 13, 15);
generateMap(map3, "x", 7, 13, 16);
generateMap(map3, "y", 7, 13, 15);
generateMap(map3, "y", 7, 13, 16);
generateMap(map3, "y", 7, 13, 4);
generateMap(map3, "y", 7, 13, 3);
generateMap(map3, "x", 7, 13, 7);
generateMap(map3, "x", 7, 13, 8);
generateMap(map3, "x", 7, 13, 9);
generateMap(map3, "x", 7, 13, 10);
generateMap(map3, "x", 7, 13, 11);
generateMap(map3, "x", 7, 13, 12);


