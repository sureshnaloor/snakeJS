// let food = { x: 10, y: 2 };
let GRID_SIZE = 21;
import { onSnake, expandSnake } from './snake.js';
let food = getRandomFoodPosition();

const EXPANSION_RATE = 1;
export function update() {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = getRandomFoodPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;

	foodElement.classList.add('food');

	gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
	let newFoodPosition;
	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}

function randomGridPosition() {
	return {
		x: Math.floor(Math.random() * GRID_SIZE) + 1,
		y: Math.floor(Math.random() * GRID_SIZE) + 1,
	};
}
