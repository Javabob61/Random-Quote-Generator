document.getElementById("twitterButton").style.float = left;

document.getElementById("twitterButton").color = white;

function randomColor() {
  // This block of code causes a random variation in the background color of the body and the text.
  var myColors = [
    "DarkGreen",
    "BlueViolet",
    "Blue",
    "FireBrick",
    "Purple",
    "Indigo",
    "Red"
  ];

  var someNumber = Math.random();
  var myRandomColor = Math.floor(someNumber * myColors.length);

  var newColor = myColors[myRandomColor];

  document.getElementById("mybody").style.backgroundColor = newColor;
  document.getElementById("myButton").style.backgroundColor = newColor;
  document.getElementById("twitterButton").style.backgroundColor = newColor;

  document.getElementById("onlyDiv").style.color = newColor;
}

function getAQuote() {
  // Randomly selects one of the quotes below.
  var myNewQuote = [
    '"Damn right I\'ve got the blues"',
    '"I\'d never belong to a club that would have someone like me for a member"',
    '"You\'re gonna want more cowbell"',
    '"This one goes to 11"',
    '"Keep looking up"',
    '"Chess is ruthless: you\'ve got to be prepared to kill people"',
    '"When the chess game is over, the pawn and the king go back to the same box"',
    '"Patriotism is supporting your country all the time, and your government when it deserves it"',
    '"Go to Heaven for the climate, Hell for the company"',
    '"Make crime pay. Become a lawyer"',
    '"True friends stab you in the front"',
    '"The first principle is that you must not fool yourself and you are the easiest person to fool"'
  ];

  var quoteAuthor = [
    "- Buddy Guy",
    "- Woody Allen",
    "- Bruce Dickinson",
    "- Nigel Tufnel",
    "- Neil DeGrasse Tyson",
    "- Nigel Short",
    "- Irish saying",
    "- Mark Twain",
    "- Mark Twain",
    "- Will Rodgers",
    "- Oscar Wilde",
    "- Richard Feynman"
  ];

  var randomNumber = Math.random();
  var myRandomNumber = Math.floor(randomNumber * myNewQuote.length);

  randomColor();
  document.getElementById("quoteText").innerHTML = myNewQuote[myRandomNumber];
  document.getElementById("author").innerHTML = quoteAuthor[myRandomNumber];
}

function tweetNow() {
  // When the Tweet button is clicked, the quote and its author are sent to twitter. User must enter their hashtag.
  var newHref =
    "https://twitter.com/intent/tweet?text=" +
    document.getElementById("quoteText").innerHTML +
    " " +
    document.getElementById("author").innerHTML;

  window.open(newHref, "_blank"); // To open website using a button without using an anchor use this method for codepen. Also, whenever you redirect in codepen with <a></a> you must include target="_blank";
}
