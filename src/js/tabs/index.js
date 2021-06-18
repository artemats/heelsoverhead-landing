const tabButtons = document.querySelectorAll('.tabs-buttons-item');
const tabContents = document.querySelectorAll('.tabs-content-item');

// For first render //
if(!!tabButtons[0]) {
	tabButtons[0].classList.add('active');
	tabContents[0].classList.add('active');

	for (let i = 0; i < tabButtons.length; i++) {
		tabButtons[i].addEventListener('click', function () {
			// let targetId = this.getAttribute('data-content');
			clearAllActiveClasses();
			this.classList.add('active');
			tabContents[i].classList.add('active');
		});
	}

	function clearAllActiveClasses() {
		for (let i = 0; i < tabButtons.length; i++) {
			tabButtons[i].classList.remove('active');
			tabContents[i].classList.remove('active')
		}
	}
}