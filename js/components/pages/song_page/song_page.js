import resetScreen from "../../../actions/reset_screen";
import renderButton from "../../buttons/render_button";
import startSong from "./start_song";
import introPage from "../intro";
// import backButton from "../../buttons/back_button";

export default function songPage() {
	resetScreen();

	// Render start button
	renderButton([400.5, 300.5, 400, 125], ["Future Retro", 420.5, 380.5], startSong);

	// TODO: back button to Intro page
	// Render back button and add "left keypress" back
	renderButton([-0.5, -0.5, 170, 100], ["Back", 25, 70], introPage);
	window.listeners.introBackButtonKeyupListener = (event) => {
		if (event.key === 'ArrowLeft') {
			introPage();
		}
	};
	document.addEventListener('keyup',
		window.listeners.introBackButtonKeyupListener);
}
