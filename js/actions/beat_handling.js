import { playSong1 } from "./song_handling";
// import sleep from "./sleep";

export default function handleBeats() {
	const song1 = document.getElementById("song1");
	song1.volume = 0.3;
	song1.play();
}
