//# Label: Better Comments Key (added # comment style to settings.json)
//! Warning: A Palantir is a dangerous tool, Saruman.
//? Question: Why? Why should we fear to use it?
//* Highlight: They are not all accounted for, the lost Seeing Stones.
//// Strike - Friendship with Saruman is not lightly thrown aside!
//todo: Leap off the Tower of Orthanc onto a giant eagle

const frontRoom = document.querySelector(".frontRoom");
const kitchen = document.querySelector(".kitchen");
const firstFloor = document.querySelector(".firstFloor");
const gardenShed = document.querySelector(".gardenShed");
const attic = document.querySelector(".attic");
const linkAll = document.querySelectorAll(".link");

frontRoom.addEventListener("click", val => {
  console.log(val);
});
