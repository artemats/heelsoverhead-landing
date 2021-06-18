const option1 = document.querySelector('#preference_1');
const option2 = document.querySelector('#preference_2');
const option3 = document.querySelector('#preference_3');
const option4 = document.querySelector('#preference_4');

if(!!option1 || !!option2 || !!option3 || !!option4) {

	option1.addEventListener('change', function () {
		clearAllNotRegular();
	});

	option2.addEventListener('change', function () {
		clearRegular();
		option3.checked = false;
	});

	option3.addEventListener('change', function () {
		clearRegular();
		option2.checked = false;
	});

	option4.addEventListener('change', function () {
		clearRegular();
	});

}

function clearRegular () {
	option1.checked = false;
}

function clearAllNotRegular () {
	option2.checked = false;
	option3.checked = false;
	option4.checked = false;
}