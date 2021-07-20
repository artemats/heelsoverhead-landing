import Plyr from "plyr";

const player = new Plyr(document.querySelector('#player'), {
	controls: ['play-large']
});

player.play();