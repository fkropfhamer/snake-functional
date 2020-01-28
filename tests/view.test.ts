import { renderGameState } from '../src/view';
import { Key } from '../src/enums';

describe('view', () => {
    xit('renders the gamestate', () => {
        const gameState = {
            snakeSegments: [{ position: {x: 1, y: 1,}, movingPosition: Key.ARROW_DOWN}, { position: {x: 1, y: 2,}, movingPosition: Key.ARROW_DOWN}, { position: {x: 1, y: 3,}, movingPosition: Key.ARROW_DOWN}],
            apple: {x: 4,y: 4 },
            isOver: false,
            score: 0,
            fieldSize: 3,
            lastPressedKey: Key.ARROW_DOWN,
        }

        renderGameState(gameState);

        expect(true).toBe(true);
    });

    it('return head and tail', () => {
        const arr = [1, 2, 3, 4];
        const [head, ...tail] = arr;

        expect(head).toBe(1);
        expect(tail).toEqual([2, 3, 4]);
    });
});