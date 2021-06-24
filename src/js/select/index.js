import Choices from "choices.js";

const element = document.querySelector('.select');
if(!!element) {
	const choices = new Choices(element, {
		searchEnabled: false
	});
}