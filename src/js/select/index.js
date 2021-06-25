import Choices from "choices.js";

const element = document.querySelector('.select');
const currencySelect = document.querySelector('#currency')
if(!!element) {
	const choices = new Choices(element, {
		searchEnabled: false
	});
}

if(!!currencySelect) {
	currencySelect.addEventListener('change', function () {
		console.log(this.value);
		document.cookie = `currency=${this.value}`;
		document.location.reload();
	});
}