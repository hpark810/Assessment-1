const memeForm = document.getElementById('memeForm');
const memesContainer = document.getElementById('memes');

memeForm.addEventListener('submit', function(event) {
	event.preventDefault();
	generateMeme(event.target);
	for (input of event.target.elements) {
		input.value = '';
	}
});

memesContainer.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentElement.remove();
	}
});

function generateMeme(form) {
	const meme = document.createElement('div');
	const memeWrap = document.createElement('div');
	const btn = document.createElement('button');
	let formTopText = document.createElement('p');
	let formImage = document.createElement('img');
	let formBottomText = document.createElement('p');
	let memeWrapChildren = [];
	meme.className = 'meme';
	memeWrap.className = 'meme-wrap';
	btn.innerText = 'Remove';
	btn.className = 'remove-meme';
	for (item of form.elements) {
		if (item.id === 'memeFormTopText') {
			formTopText.innerText = item.value;
			formTopText.className = 'top-text';
			memeWrapChildren.push(formTopText);
		} else if (item.id === 'memeFormImage') {
			formImage.src = item.value;
			formImage.alt = 'meme';
			memeWrapChildren.push(formImage);
		} else if (item.id === 'memeFormBottomText') {
			formBottomText.innerText = item.value;
			formBottomText.className = 'bottom-text';
			memeWrapChildren.push(formBottomText);
		}
	}
	for (element of memeWrapChildren) {
		memeWrap.append(element);
	}
	meme.append(memeWrap);
	meme.append(btn);
	memesContainer.prepend(meme);
}
