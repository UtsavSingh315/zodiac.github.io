var quoteNum = 0;
var quoteText = ['When a man is at his lowest,<br><br>You then see who he is<br>and what he is made of.',
      'I will get what I want and<br>I will be doing this on my terms.',
      'Every man has in himself<br>The most dangerous traitor of all.',
      'What people commonly call fate<br>Is mostly their own stupidity.',
      'Genius lives only one<br>story above madness.',
      'The cornered rat<br>Would even bite the cat.',
      `Sometimes life is gonna hit<br>you in the head with a brick.<br><br>Don't lose faith.`,
      'Courage is not being fearless<br>It is being scared and finding<br>the strength To fight your fear.',
      'In the game of survival neither the<br>strongest nor smartest have the advantage<br><br>but rather Those most willing<br>and able to adapt.',
      'The once who accomplish true greatness are The foolish<br>who keep pressing forward<br><br>The once who accomplish nothing<br>are The wise who know when to quit.',
      'Strength is nothing<br>but tolerance of pain.',
      `There is one thing we have and other<br>creatures don't We have secrets.`,
      'I Must live up to my precious promises.',
      'No matter how many<br>allies you have around you<br><br>When you die You will be alone.',
      `The best way to live<br>with Regret is to learn from it<br>and don't repeat the mistakes.`,
      `It wasn't me who was wrong<br>It was the world.`,
      'No matter how dark<br>the world is If you shine,<br><br>there will be a light.',
];
var quote = document.getElementById('quote');
var inst = setInterval(change, 7000);

function change() {
      quote.innerHTML = quoteText[quoteNum];
      quoteNum++;
      if (quoteNum > (quoteText.length - 1)) {
            quoteNum = 0;
      };
};

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);