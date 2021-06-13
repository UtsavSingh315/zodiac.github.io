var meNum = 0;
var meText = ['PROGRAMMER',
      'GRAPHIC DESIGNER',
      'STUDENT',
      'WEB DEVELOPER',];
var abt = document.getElementById('mAbt');
var inst = setInterval(changeMe, 400);

function changeMe() {
      abt.innerHTML = meText[meNum];
      meNum++;
      if (meNum > (meText.length - 1)) {
            meNum = 0;
      };
};




var imNum = 0;
var imSrc = ['./images/me2.png',
      './images/me.jpg',];
var sorImg = document.getElementsByClassName('meImg');
var inst2 = setInterval(changeImg, 7000);

function changeImg() {
      sorImg[0].src = imSrc[imNum];
      imNum++;
      if (imNum > (imSrc.length - 1)) {
            imNum = 0;
      };
};
