// import { keyboard } from "../keyboard";
import renderTextField from "../text_field/text_field";
import backButton from "./back_button";
import renderButton from '../buttons/render_button';
import removeAllListeners from "../../actions/remove_all_listeners";
// import handleBeats from "../../actions/beat_handling";
import {
	playSong1
} from "../../actions/song_handling";

export default function startSong() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	removeAllListeners();

	// Render back button
	renderButton([-0.5, -0.5, 170, 100], ["Back", 25, 70], backButton);

	playSong1().play();

	// keyboard();

	renderTextField();

	// handleBeats();
}
