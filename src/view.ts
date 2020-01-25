import { GameState, SnakeSegment, Position } from "./snake";
import { Color } from "./enums";
import Config from "./config";

export function renderGameState(gameState: GameState): void {
    const canvas = getCanvas();
    const canvasSize = calculateCanvasSize();
    const cellSize = calculateCellSize(gameState.fieldSize, canvasSize);
    const context = getContext(canvas);
    const fieldSize = gameState.fieldSize;

    resizeCanvas(canvasSize, canvas);
    resetCanvas(context);
    drawPlayField(fieldSize, cellSize, context);
    drawSnake(gameState.snakeSegments, cellSize, context);
    drawApple(gameState.apple, cellSize, context);
}

function drawPlayField(fieldSize: number, cellSize: number, context: CanvasRenderingContext2D): void {
    const endOfPlayField: number = Config.PLAY_FIELD_SIZE * cellSize + 1;
        for (let i: number = 0; i <= endOfPlayField; i += cellSize) {
            drawLine(i, 0, i, endOfPlayField, context);
            drawLine(0, i, endOfPlayField, i, context);
        }
}

function drawSnake(snakeSegments: SnakeSegment[], cellSize: number, context: CanvasRenderingContext2D): void {
    const snakeHead = snakeSegments[0];
    const snakeBody = arrayWithoutHead(snakeSegments);
    drawSnakeSegment(snakeHead, Config.SNAKE_HEAD_COLOR, cellSize, context);
    snakeBody.forEach(snakeSegement => drawSnakeSegment(snakeSegement, Config.SNAKE_SEGMENTS_COLOR, cellSize, context));
}

function drawSnakeSegment(snakeSegment: SnakeSegment, color: Color, cellSize: number, context: CanvasRenderingContext2D) {
    drawSquare(snakeSegment.position.x, snakeSegment.position.y, color, cellSize, context);
}

function drawApple(apple: Position, cellSize: number, context: CanvasRenderingContext2D) {
    drawSquare(apple.x, apple.y, Config.APPLE_COLOR, cellSize, context);
}

function resizeCanvas(canvasSize: number, canvas: HTMLCanvasElement) {
    canvas.width = canvasSize;
    canvas.height = canvasSize;
}

function calculateCellSize(fieldSize: number, canvasSize: number): number {
    const cellSize = canvasSize / fieldSize;
    return cellSize;
}

function calculateCanvasSize(): number {
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;

    const canvasSize: number = windowWidth >= windowHeight ? windowHeight : windowWidth;

    return canvasSize;
}

function resetCanvas(context: CanvasRenderingContext2D): void {
    const canvasSize = calculateCanvasSize();
}

function getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");
    return context;
}

function getCanvas(): HTMLCanvasElement {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    return canvas
}

function drawSquare(x: number, y: number, color: Color, cellSize: number, context: CanvasRenderingContext2D) {
    context.fillStyle = color;
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
}

function drawLine(x1: number, y1: number, x2: number, y2: number, context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function arrayWithoutHead(array: Array<any>) {
    return array.filter((a) => a !== array[0]);
}