const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

const imgViewer = document.getElementById("img-viewer");

//get the index of the current background in bgArr
let currentBg = getComputedStyle(document.getElementById("img-viewer")).getPropertyValue('--bg');
let number = currentBg.substring(12,13);
number = parseInt(number);
let first = currentBg.substring(0,12);
let second = currentBg.substring(13);
//console.log(first, number, second);

rightButton.addEventListener("click", () => {
  if (number<6) {
    number = number + 1;
    document.getElementById("img-viewer").style.setProperty('--bg', first+number+second);
  }
  else {
    number = 1;
    document.getElementById("img-viewer").style.setProperty('--bg', first+"1"+second);
  }
});
leftButton.addEventListener("click", () => {
  if (number>1) {
    number = number - 1;
    document.getElementById("img-viewer").style.setProperty('--bg', first+number+second);
  }
  else {
    number = 6;
    document.getElementById("img-viewer").style.setProperty('--bg', first+"6"+second);
  }
});
