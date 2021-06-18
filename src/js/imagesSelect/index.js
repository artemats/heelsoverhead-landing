import { countryCodes } from '../coutryCodes/index';

const btns = document.querySelectorAll('.dropdown-trigger');
const countrySelect = document.querySelector('#country-codes');
const dropdowns = document.querySelectorAll('.dropdown-menu');

if(!!countrySelect) {
	for (let i = 0; i < btns.length; i++) {
		let dropdownMenu;
		btns[i].addEventListener('click', (e, elem) => {
			const dropdownId = btns[i].getAttribute('data-dropdown');
			dropdownMenu = document.querySelector(`.dropdown-menu[data-dropdown="${dropdownId}"]`);
			dropdownMenu.classList.add('is-open');
		});
	}

	for (let i = 0; i < countryCodes.length; i++) {
		let option = document.createElement('div');
		option.classList.add('option')
		option.innerHTML = `<img src="https://www.countryflags.io/${countryCodes[i].code.toLowerCase()}/flat/16.png" alt="" class="option-icon" /><div class="option-title country" data-country="${countryCodes[i].name}" data-dial-code="${countryCodes[i].code.toLowerCase()}">${countryCodes[i].name}</div><div class="option-title code" data-code="${countryCodes[i].dial_code}">${countryCodes[i].dial_code}</div>`;
		countrySelect.append(option);
	}

// click on option //
	const options = document.querySelectorAll('.option');
	const countryCodeHtml = document.querySelector('#country-code');
	const countryFlagHtml = document.querySelector('#country-flag');
	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener('click', function () {
			let code = this.querySelector('[data-code]').getAttribute('data-code');
			let dialCode = this.querySelector('[data-dial-code]').getAttribute('data-dial-code');
			countryCodeHtml.innerHTML = code;
			countryFlagHtml.setAttribute('src', `https://www.countryflags.io/${dialCode}/flat/16.png`);
			document.querySelector('#phone-code').value = code;
		});
	}

// for first render //
	countryCodeHtml.innerHTML = countryCodes[0].dial_code;
	countryFlagHtml.setAttribute('src', `https://www.countryflags.io/${countryCodes[0].code.toLowerCase()}/flat/16.png`);
	document.querySelector('#phone-code').value = countryCodes[0].dial_code;

// close dropdown //
	window.addEventListener('click', function (e) {
		if (!e.target.classList.contains('dropdown-trigger')) {
			closeAllDropdowns();
		}
	});

	const closeAllDropdowns = () => {
		for (let i = 0; i < dropdowns.length; i++) {
			dropdowns[i].classList.remove('is-open');
		}
	}
}