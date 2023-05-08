import { ConsoleRenderer } from "./ConsoleRenderer.js";
import { Game } from "./Game.js";

export const state = {
  // Придумать структуру данных
  // Например,
  // score: 0,
  // level: 1
  // snake: {
  //   direction: Direction,
  //   velocity: number;
  //   position: Array<{ x: number; y: number; }>;
  //     [
  //       { x: 0, y: 0 },
  //       { x: 1, y: 0 },
  //     ]
  // },
  // food: Array<Food>,
  // obstacles: Array<Obstacle>,
  // maps: [
  //   map1,
  //   map2,
  //   map3,
  //   map4
  // },
  
  // get board() { 
  //     return [
  //         [null, null, Food, null, null],
  //         [Obstacle, null, null, null, null],
  //         [null, Snake[1], Snake[0], Food, null],
  //         [...],
  //         [...],
  //     ]
  // },
      
  // состояния игры в структуре данных?
  // nextLevel: false,
  // win: false,
  // gameStart: false,
  // gameOver: false

};

// const element = document.querySelector('canvas');

const renderer = new ConsoleRenderer();
const game = new Game(state, renderer);

game.start();