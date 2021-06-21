const form = document.querySelector('#subscription');
const subscriptionContent = document.querySelector('.subscription-content');

if(!!form) {
	const messageYPosition = document.querySelector('.subscription-content-alert').getBoundingClientRect().y;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		// безпосередньо при відправці //
		subscriptionContent.classList.add('sending');
		window.scrollTo({
			top: parseInt(messageYPosition),
			behavior: 'smooth',
		});
		// теж безпосередньо при відправці, через 100мс //
		setTimeout(function () {
			subscriptionContent.classList.add('start');
		}, 100);


		// при успішній відправці //
		subscriptionContent.classList.add('success');
		window.location.href = 'final.html';


		// при помилці //
		subscriptionContent.classList.add('error');
		setTimeout(function () {
			subscriptionContent.classList.remove('sending', 'start', 'error');
		}, 1000);

	});
}