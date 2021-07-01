import '../sass/index.scss';
import './subscriptionCheckboxesRules/index';
import './countdownTimer/index';
import './tabs/index';
// import './subscription/index';
import './validation/index';
import './imagesSelect/index';
import './select/index';

document.addEventListener('DOMContentLoaded', function(event) {
	document.querySelector('#wrapper').classList.remove('loading');
});

for (let i = 0; i < dropdowns.length; i++) {
	dropdowns[i].classList.remove('is-open');
}