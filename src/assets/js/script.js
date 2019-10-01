//# Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle

let anchorCollection = document.getElementsByTagName('a');
let outAnchors = document.querySelector('.outputAnchors');

let postAnchors = (anchorVar) => {
	let textAnchor = document.createTextNode(anchorVar);
	let liAnchor = document.createElement('li');
	liAnchor.appendChild(textAnchor);
	outAnchors.appendChild(liAnchor);
};

//# Underline current page in nav bars
(() => {
	for (let i = 0; i < anchorCollection.length; i++) {
		let anchorVar = anchorCollection[i].attributes.href.value.toLowerCase();
		anchorCollection[i].attributes.href.value.toLowerCase() ==
		window.location.pathname.toLowerCase()
			? (anchorCollection[i].setAttribute('id', 'currentPage'),
			  console.log(anchorCollection[i]),
			  console.log(anchorVar),
			  postAnchors(anchorVar))
			: anchorCollection[i].removeAttribute('id');
	}
})();
