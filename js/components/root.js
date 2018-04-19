import mainGame from './main_game/main_game';

// let canvas;
// let ctx;

export default function root() {
	const canvas = document.getElementById('game-layer');
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.strokeRect(400.5, 300.5, 400, 125);
	ctx.fillStyle = '#000';
	ctx.fill();

	(ctx.font = '50px Roboto Mono'), '50px Courier', 'monospace';
	ctx.fillText('Future Retro', 420.5, 380.5);

	canvas.addEventListener('click', mainGame);
}