import removeAllListeners from "../../../actions/remove_all_listeners";
import renderButton from "../../buttons/render_button";
import startSong from "./start_song";
import bindSongs from "../../../actions/song_handling";
import renderScore from '../../score/render_score';

export default function mainPage() {
	removeAllListeners();

	// Render start button
	renderButton(
		[400.5, 300.5, 400, 125], ["Future Retro", 420.5, 380.5], startSong
	);

	// Bind songs to window
	bindSongs();

	// Render user score
	renderScore();

	document.body.style.cursor = "default";
}
