// обьект для маппинга 
const mapKeyCode = (keyCode) => {
    let direction = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    return direction[keyCode];
}