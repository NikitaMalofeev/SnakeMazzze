const state = {
    snake: {
        tail: [
            { x: 1, y: 1, d: "right", h: false},
            { x: 2, y: 1, d: "right", h: false},
            { x: 3, y: 1, d: "right", h: false},
            { x: 4, y: 1, d: "right", h: true}
        ],
        direction: "right"
    },
    //указываем координаты и сопоставляем в рендер гейм для еды 
    food: {
        //сьедена еда или нет
        didAte: false,
        apples: { x: 5, y: 5 }
    },
    level: 1,
    maps: {
        "map1": map1,
        "map2": map2,
        "map1": map1,
        "map1": map1
    }
}



