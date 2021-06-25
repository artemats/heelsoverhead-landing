import Choices from "choices.js";

const element = document.querySelector('.select');
if(!!element) {
	const choices = new Choices(element, {
		searchEnabled: false
	});
}

document.querySelector('#currency').addEventListener('change', function () {
	console.log(this.value);
	document.cookie = `currency=${this.value}`;
	document.location.reload();
});