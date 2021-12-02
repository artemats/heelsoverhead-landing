import inView from 'in-view/dist/in-view.min';
import Plyr from "plyr";

if(!!document.querySelector('#player')) {
	const player = new Plyr(document.querySelector('#player'), {
		controls: ['play-large']
	});

	inView('#player')
		.on('enter', function () {
			setTimeout(() => {
				// player.play();
				document.querySelector('.plyr__control').click();
				player.muted = false;
			}, 1000);
		})
		.on('exit', function () {
			player.pause();
		});

}