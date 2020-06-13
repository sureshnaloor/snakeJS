let gameOver = false;

import {
	SNAKE_SPEED,
	update as updateSnake,
	draw as drawSnake,
	outsideGrid,
	getSnakehead,
	snakeIntersection,
} from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
	// check if game is over
	if (gameOver) {
		if (confirm('You lost, press OK to restart')) {
			window.location('/');
		}
		return;
	}

	window.requestAnimationFrame(main);
	const secsSinceLastRender = (currentTime - lastRenderTime) / 1000;

	if (secsSinceLastRender < 2 / SNAKE_SPEED) return;

	console.log('rendered');
	lastRenderTime = currentTime;
	// console.log(currentTime)
	// console.log(secsSinceLastRender);

	// update loop
	update();

	// draw loop
	draw();
}
window.requestAnimationFrame(main);

function update() {
	updateSnake();
	updateFood();
	checkDeath();
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}
function checkDeath() {
	gameOver = outsideGrid(getSnakehead()) || snakeIntersection();
}
