var indX = 1;
var ans1;
var ans2;
var ans3;
var ans4;
var ans5;

var   pls = document.getElementById('pls');
var  pls2 = document.getElementById('pls2');
var  pls3 = document.getElementById('pls3');
var  pls4 = document.getElementById('pls4');
var  pls5 = document.getElementById('pls5');
var start = document.getElementById('qzStart');
var ques1 = document.getElementById('qzQues1');
var ques2 = document.getElementById('qzQues2');
var ques3 = document.getElementById('qzQues3');
var ques4 = document.getElementById('qzQues4');
var ques5 = document.getElementById('qzQues5');

function getValue1() {
      ans1 = event.target.value;
      ans1 = Number(ans1);
};
function getValue2() {
      ans2 = event.target.value;
      ans2 = Number(ans2);
};
function getValue3() {
      ans3 = event.target.value;
      ans3 = Number(ans3);
};
function getValue4() {
      ans4 = event.target.value;
      ans4 = Number(ans4);
};
function getValue5() {
      ans5 = event.target.value;
      ans5 = Number(ans5);
};

function next() {
      start.style.display = 'none';
      ques1.style.display = 'initial';
};
function next1() {
      if (isNaN(ans1)) {
            pls.style.display = 'initial';
      } else {
            ques1.style.display = 'none';
            ques2.style.display = 'initial';
      };
};
function next2() {
      if (isNaN(ans2)) {
            pls2.style.display = 'initial';
      } else {
            ques2.style.display = 'none';
            ques3.style.display = 'initial';
      };
};
function next3() {
      if (isNaN(ans3)) {
            pls3.style.display = 'initial';
      } else {
            ques3.style.display = 'none';
            ques4.style.display = 'initial';
      };
};
function next4() {
      if (isNaN(ans4)) {
            pls4.style.display = 'initial';
      } else {
            ques4.style.display = 'none';
            ques5.style.display = 'initial';
      };
};
function next5() {
      if (isNaN(ans5)) {
            pls5.style.display = 'initial';
      } else {
            ques5.style.display = 'none';
            if ((ans1*ans2*ans3*ans4*ans5)%27 == 0) {
                  document.getElementById('res1').style.display = 'initial';
            } else if ((ans1*ans2*ans3*ans4*ans5)%125 == 0) {
                  document.getElementById('res2').style.display = 'initial';
            } else if ((ans1*ans2*ans3*ans4*ans5)%343 == 0) {
                  document.getElementById('res3').style.display = 'initial';
            } else if ((ans1*ans2*ans3*ans4*ans5)%1331 == 0) {
                  document.getElementById('res4').style.display = 'initial';
            } else if ((ans1*ans2*ans3*ans4*ans5)%2197 == 0) {
                  document.getElementById('res5').style.display = 'initial';
            } else {
                  document.getElementById('res6').style.display = 'initial';
            };
            document.getElementById('fr2').style.background = "black";
      };
};