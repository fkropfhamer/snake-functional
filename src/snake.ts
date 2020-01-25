import { Key } from "./enums";

export interface GameState {
  snakeSegments: SnakeSegment[];
  apple: Position;
  isOver: boolean;
  score: number;
  fieldSize: number;
  lastPressedKey: Key;
}

export interface SnakeSegment {
    position: Position;
    movingPosition: Key;
}

export interface Position {
    x: number;
    y: number;
}

export function createGameState(fieldSize: number): GameState {
    const gameState = {
        snakeSegments: [{ position: {x: 1, y: 1,}, movingPosition: Key.ARROW_DOWN}, { position: {x: 1, y: 2,}, movingPosition: Key.ARROW_DOWN}, { position: {x: 1, y: 3,}, movingPosition: Key.ARROW_DOWN}],
        apple: {x: 4,y: 4 },
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

export function updateLastPressedKey(gameState: GameState, key: Key): GameState {
    const newGameState = {...gameState, lastPressedKey: key}
    return newGameState;
}
