export class Game {
    private state: State;
    private renderer: Renderer;

    private timer = null;
    
    constructor(state: State, renderer: Rendered) {
        this.state = state;
        this.renderer = renderer;
    }

    private handleWindowKeydown = () => {
        // Меняем направление движения змейки
        console.log("[change direction]");
    }

    private handleTick = () => {
        console.log("[tick]");

        // Меняем положение змейки в зависимости
        // от направления движения и ее скорости
        // this.state.snake.go();
        
        // const { x, y } = this.state.snake.head;
        
        // // Если змейка встретилась с едой
        // if(this.board[y][x] instanceof Food) {
        //     this.state.snake.raise();
        // }
        
        // if(this.board[y][x] instanceof Obstacle) {
        //     this.state.snake.die();
        // }
    }

    private handleRender = () => {
        // Отрисовываем кадр
        this.renderer.render(this.state);
    }
    
    public start() {
        window.addEventListener('keydown', this.handleWindowKeydown);
        
        this.timer = setInterval(this.handleTick, 250);
        
        requestAnimationFrame(handleRender);
    }

    public stop() {
        window.removeEventListener('keydown', this.handleWindowKeydown)
        clearInterval(this.timer);
    }
}