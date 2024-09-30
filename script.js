// let button = document.getElementById('quest1');
// let resp = document.getElementById('response1');
let img = document.querySelectorAll('.plus');

// button.addEventListener('click', () => {
// 	if (resp.style.display === 'none') {
// 		resp.style.display = 'block';
// 		img.id = 'plus-turn-around';
// 	} else {
// 		resp.style.display = 'none';
// 		img.id = 'plus';
// 	}
// });

let buttons = document.querySelectorAll('quest');
let responses = document.querySelectorAll('response');

buttons.forEach((quest) => {
	quest.addEventListener('click', () => {
		showResp();
		plus();
	});
});

function showResp() {
	responses.forEach((res) => {
		res.style.display = 'block';
	});
}

function plus() {
	img.forEach((image) => {
		image.id = 'plus-turn-around';
	});
}
