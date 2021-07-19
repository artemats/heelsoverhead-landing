// const form = document.querySelector('#subscription');
// const subscriptionContent = document.querySelector('.subscription-content');
//
// if(!!form) {
// 	form.addEventListener('submit', function (e) {
// 		e.preventDefault();
//
// 		// безпосередньо при відправці //
// 		subscriptionContent.classList.add('sending');
//
// 		// теж безпосередньо при відправці, через 100мс //
// 		setTimeout(function () {
// 			subscriptionContent.classList.add('start');
// 		}, 100);
//
//
// 		// при успішній відправці //
// 		// subscriptionContent.classList.add('success');
// 		// window.location.href = 'final.html';
//
//
// 		// при помилці //
// 		setTimeout(function () {
// 			subscriptionContent.classList.add('error');
// 		}, 500);
// 		setTimeout(function () {
// 			subscriptionContent.classList.remove('sending', 'start', 'error');
// 			subscriptionContent.classList.add('message');
// 		}, 1000);
// 	});
// }

// close subscription message //
const closeBtn = document.querySelector('.close-message');
if(!!closeBtn) {
	document.querySelector('.close-message').addEventListener('click', function () {
		document.querySelector('.subscription-content').classList.remove('message');
	});
}