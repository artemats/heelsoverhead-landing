const form = document.querySelector('#subscription');
const subscriptionContent = document.querySelector('.subscription-content');

if(!!form) {
	const messageYPosition = document.querySelector('.subscription-content-alert').getBoundingClientRect().y;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		subscriptionContent.classList.add('sending');
		window.scrollTo({
			top: parseInt(messageYPosition),
			behavior: 'smooth',
		})
		setTimeout(function () {
			subscriptionContent.classList.add('start');
		}, 100);
		setTimeout(function () {
			subscriptionContent.classList.add('success');
		}, 2000);
		setTimeout(function () {
			window.location.href = 'final.html'
		}, 3000);
		// setTimeout(function () {
		// 	subscriptionContent.classList.add('error');
		// }, 2000);
		// setTimeout(function () {
		// 	subscriptionContent.classList.remove('sending', 'start', 'error');
		// }, 2500);
	});
}