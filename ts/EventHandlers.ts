import CanvasComponent from "./CanvasComponent.js";

export default class EventHandlers {
    private readonly canvas: HTMLCanvasElement;
    private canvasComponent: CanvasComponent;


    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.canvas = this.canvasComponent.canvas;

        this.initEventHandlers(this.canvas);
    }

    public initEventHandlers(canvas: HTMLCanvasElement) {
        this.canvas.addEventListener("mousedown", this.pressEventHandler);
        // canvas.addEventListener("mousemove", this.dragEventHandler);
        // canvas.addEventListener("mouseup", this.releaseEventHandler);
        // canvas.addEventListener("mouseout", this.cancelEventHandler);
        //
        // canvas.addEventListener("touchstart", this.pressEventHandler);
        // canvas.addEventListener("touchmove", this.dragEventHandler);
        // canvas.addEventListener("touchend", this.releaseEventHandler);
        // canvas.addEventListener("touchcancel", this.cancelEventHandler);
        //
        // document.getElementById('clear')
        //     .addEventListener("click", this.clearEventHandler);
    };

    private pressEventHandler = (e: MouseEvent) => {
        let rect = this.canvas.getBoundingClientRect();

        let res =  {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        this.canvasComponent.drawSquare(res.x, res.y, 10, 10);
    };
}

