// interface Renderer {
//     render: (state: State) => void;
// }

class CanvasRenderer /* implements Renderer */ {
    element: HTMLElement;
    
    constructor(element: HTMLElement) {
        this.element = element;
    }
    
    public render(state: State) {
        // Отрисовываем кадр основываясь на this.state
        this.element.innerHTML = '';
    }
}