import { Key } from "./enums";

export interface GameState {
  snakeSegments: SnakeSegment[];
  apple: Position;
  isOver: boolean;
  score: number;
  fieldSize: number;
  lastPressedKey: Key;
}

interface SnakeSegment {
    position: Position;
    movingPosition: Key;
}

interface Position {
    x: number;
    y: number;
}

export function createGameState(fieldSize: number): GameState {
    const gameState = {
        snakeSegments: [],
        apple: {x: 0,y: 0 },
        isOver: false,
        score: 0,
        fieldSize,
        lastPressedKey: Key.ARROW_DOWN,
    }
    return gameState;
} 

export function updateGameState(gameState: GameState): GameState {
    return gameState;
}

export function renderGameState(gameState: GameState): void {
    console.log('view');
}