//# Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle

let anchorCollection = document.getElementsByTagName('a');

//# Underline current page in nav bars
(() => {
	for (let i = 0; i < anchorCollection.length; i++) {
		anchorCollection[i].attributes.href.value.toLowerCase() ==
		window.location.pathname.toLowerCase()
			? anchorCollection[i].setAttribute('id', 'currentPage')
			: anchorCollection[i].removeAttribute('id');
	}
})();

let testButton = document.querySelector('.testButton');
let outPage = document.querySelector('.outputPage');
let outAnchors = document.querySelector('.outputAnchors');

let testAnchors = () => {
	let textPage = document.createTextNode(
		window.location.pathname.toLowerCase()
	);
	let liPage = document.createElement('li');
	liPage.appendChild(textPage);
	outPage.appendChild(liPage);

	for (let i = 0; i < anchorCollection.length; i++) {
		let textAnchor = document.createTextNode(
			anchorCollection[i].attributes.href.value.toLowerCase()
		);
		let liAnchor = document.createElement('li');
		liAnchor.appendChild(textAnchor);
		outAnchors.appendChild(liAnchor);
	}

	console.log(window.location.pathname);
};

testButton.addEventListener('click', testAnchors);
