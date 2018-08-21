import root from "../root";
import removeAllListeners from "../../actions/remove_all_listeners";

export default function backButton() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	removeAllListeners();

	song1.pause();
	song1.currentTime = 0;

	root();
}
