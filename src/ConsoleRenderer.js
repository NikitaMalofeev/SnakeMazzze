// interface Renderer {
//     render: (state: State) => void;
// }

class ConsoleRenderer /* implements Renderer */ {
    // element: HTMLElement;
    
    constructor(/* element: HTMLElement */) {
        // this.element = element;
    }
    
    public render(state /* : State */) {
        // Отрисовываем кадр основываясь на this.state
        console.log(state.board);
    }
}