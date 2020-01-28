import { renderGameState } from '../src/view';
import { Key } from '../src/enums';

const rewire = require('rewire');

const view = rewire('../src/view');

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

    it('returns tail', () => {
        const arr = [1, 2, 3, 4];

        const tail = view.__get__('tail')(arr);

        expect(tail).toEqual([2, 3, 4]);
    });
});