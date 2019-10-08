//* Babel's require hook will bind itself to node's require and automatically
//* compile files on the fly. This will override `node_modules` ignoring...
// require('@babel/register')({
// 	ignore: [],
// });

let anchorCollection = document.getElementsByTagName('a');

//# Underline current page in nav bars
(() => {
	for (let i = 0; i < anchorCollection.length; i++) {
		anchorCollection[i].attributes.href.value.toLowerCase() ==
		window.location.pathname.toLowerCase()
			? anchorCollection[i].parentElement.setAttribute('id', 'currentPage')
			: anchorCollection[i].removeAttribute('id');
	}
})();

//# Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle
