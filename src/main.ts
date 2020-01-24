import "./index.css";
import { createGameState, updateGameState, renderGameState, GameState } from "./snake";
import Config from "./config";

let gameState: GameState;

function end(): void {
    console.log("end");
}

function loop(): void {
    gameState = updateGameState(gameState);
    renderGameState(gameState);
    if (gameState.isOver) {
        end();
    } else {
        setTimeout(loop, Config.LOOP_INTERVAL);
    }
}

function main(): void {
    gameState = createGameState(Config.PLAY_FIELD_SIZE);
    loop();
}

main();
