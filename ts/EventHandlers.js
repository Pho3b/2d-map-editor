import CanvasComponent from "./CanvasComponent.js";
import AlgoComponent from "./AlgoComponent.js";
import ImagesLevelComponent from "./ImagesLevelComponent.js";
export default class EventHandlers {
    constructor() {
        this.canvasMouseDownEventHandler = (e) => {
            let rect = this.canvas.getBoundingClientRect();
            let mousePos = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            // let clickedSquare: Square | undefined = AlgoComponent.binarySearchOnMatrix(this.canvasComponent.squaresMatrix, mousePos);
            let clickedSquare = AlgoComponent.findClickedSquare(this.canvasComponent.squaresMatrix, mousePos, this.canvasComponent.squareWidth);
            if (clickedSquare !== undefined) {
                // clickedSquare.colorSquare();
                clickedSquare.setImage();
            }
            else {
                console.log("Undefined square, which one should i color ?");
            }
        };
        this.leveRadioClickEventHandler = (e) => {
            // @ts-ignore
            ImagesLevelComponent.selectedLevel = parseInt(e.target.id);
        };
        this.canvasComponent = CanvasComponent.getInstance();
        this.canvas = this.canvasComponent.canvas;
        this.clientRect = this.canvas.getBoundingClientRect();
        this.initEventHandlers(this.canvas);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new EventHandlers();
        }
        return this.instance;
    }
    initEventHandlers(canvas) {
        this.canvas.addEventListener("mousedown", this.canvasMouseDownEventHandler);
        let counter = 0;
        // @ts-ignore
        for (let radioBtn of ImagesLevelComponent.levelRadioBtns) {
            radioBtn.addEventListener("click", this.leveRadioClickEventHandler);
            counter++;
        }
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
    }
    ;
}
