import { keyboard } from "../keyboard";
import renderTextField from "../text_field/text_field";
import backButton from "./back_button";
import inButtonListener from "../../actions/in_button_listener";
import removeAllListeners from "../../actions/remove_all_listeners";
// import handleBeats from "../../actions/beat_handling";
import { playSong1 } from "../../actions/song_handling";

export default function startSong() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	removeAllListeners();

	// Render back button
	const back_dimens = [-0.5, -0.5, 170, 100];
	ctx.font = "50px Roboto Mono";
	ctx.fillText("Back", 25, 70);
	ctx.strokeStyle = "black";
	ctx.strokeRect(...back_dimens);

	inButtonListener(back_dimens, event, backButton);

	playSong1().play();

	keyboard();

	renderTextField();

	// handleBeats();
}
