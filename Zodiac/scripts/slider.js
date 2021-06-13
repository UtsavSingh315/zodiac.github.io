var sliderX
var wid
const slRig = document.getElementById('slRig');
const slFrame = document.getElementById('slFrame');

wid = slFrame.style.width;
wid = (parseInt(wid));
console.log(wid);

function lBtn() {
      if (slRig.style.transform == `translateX(-${6*wid}vw)`) {
            sliderX = 6;
      } else {}
      if (sliderX > 0) {
            --sliderX;
            slRig.style.transform = `translateX(${sliderX*-wid}vw)`;
      } else if (sliderX == 0) {
            slRig.style.transform = `translateX(${12*-wid}vw)`;
            sliderX = 12
      } else {};
};
function rBtn() {
      if (slRig.style.transform == `translateX(-${6*wid}vw)`) {
            sliderX = 6;
      } else {}
      if (sliderX < 12) {
            ++sliderX;
            slRig.style.transform = `translateX(${sliderX*-wid}vw)`;
      } else if (sliderX == 12) {
            slRig.style.transform = `translateX(${0*-wid}vw)`;
            sliderX = 0
      } else {};
};