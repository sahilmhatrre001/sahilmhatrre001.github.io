// Wrap every letter in a span
var textWrapper = document.querySelector(".ml6 .letters");

var skills = [
  "Coder ๐ป",
  "Web Developer๐",
  "TechGeek ๐จโ๐ป๐ฑ",
  "Stock Trader ๐๐ธ",
  "Photographer ๐ธ",
  "Traveler ๐๏ธ๐",
  "Designer๐จ๐๏ธ",
  "Music Lover ๐ถ๐ง",
];

var counter = 0;
var inst = setInterval(change, 1300);

function change() {
  textWrapper.innerText = skills[counter];
  counter++;
  if (counter >= skills.length) {
    counter = 0;
  }
}
