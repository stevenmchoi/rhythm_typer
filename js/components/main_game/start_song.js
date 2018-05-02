import { keyboard } from "../keyboard";
import renderTextField from "../text_field/text_field";
import backButton from "./back_button";
import removeAllListeners from "../../actions/remove_all_listeners";
import handleBeats from "../../actions/beat_handling";

export default function startSong() {
	const song1 = document.getElementById("song1");
	song1.volume = 0.3;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	removeAllListeners();

	ctx.font = "50px Roboto Mono";
	ctx.fillText("Back", 25, 70);
	ctx.strokeStyle = "black";
	ctx.strokeRect(-0.5, -0.5, 170, 100);
	canvas.addEventListener("click", backButton);

	song1.play();

	keyboard();

	renderTextField();

	handleBeats();
}
