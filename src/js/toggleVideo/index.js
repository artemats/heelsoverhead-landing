import inView from 'in-view/dist/in-view.min';
import Plyr from "plyr";

if(!!document.querySelector('#player')) {
	const player = new Plyr(document.querySelector('#player'), {
		controls: ['play-large']
	});

	inView('#player')
		.on('enter', function () {
			player.play();
		})
		.on('exit', function () {
			player.pause();
		});

}