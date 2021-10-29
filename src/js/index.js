import '../sass/index.scss';
import './subscriptionCheckboxesRules/index';
import './countdownTimer/index';
import './tabs/index';
import './subscription/index';
import './validation/index';
import './imagesSelect/index';
import './select/index';
import './toggleVideo/index';

document.addEventListener('DOMContentLoaded', function(event) {
	document.querySelector('#wrapper').classList.remove('loading');
	const hiddenElements = document.querySelectorAll('.show-on-load');
	for(let i = 0; i < hiddenElements.length; i++) {
		hiddenElements[i].classList.remove('hide');
	}
});