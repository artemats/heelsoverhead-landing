import Plyr from "plyr";

const playerDOM = document.querySelector('#player');
if(!!playerDOM) {
	const player = new Plyr(playerDOM, {
		controls: ['play-large']
	});

	player.play();
}