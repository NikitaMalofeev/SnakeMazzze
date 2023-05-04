let width, height, row, ceil, popup, colors, amountLevels;

width = 600;

board = {
    width,
    height: 60,
    font: "normal 25px Arial, sans-serif",
    textScore: {
        x: 60,
        y: 19
    }, 
    textLevel: {
        x: 500,
        y: 19
    },
    apples: {
        x: 15,
        y: 15
    }
}

height = width + board.height;

ceil = 30;

popup = {
    width: 200,
    height: 100,
    font: "normal 25px Arial, sans-serif",
}

row = width / ceil;

colors = {
    snakeHead: "#1fb9dd",
    snakeBody: "#7FFFD4",
    wall: "#425870",
    apples: "#d86464",
    text: "#000000",
    popup: "#e0cd1e"
};

amountLevels = 4;

