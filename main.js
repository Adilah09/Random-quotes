let currentRandomNumber = 0;

const quotes = [
  {
    author: 'Syafiq Hanafee',
    message: 'Kejap, aku tengah masak',
  },
  {
    author: 'Carol Burnett',
    message: 'Only I can change my life. No one can do it for me.',
  },
  {
    author: 'Confucious',
    message: 'It does not matter how slowly you go as long as you do not stop.',
  },
];

function getNextQuote(){
  const quote = getRandomQuote();

  setAuthor(quote.author);
  setMessage(quote.message);
}

function setAuthor(author){
  setInnerHTMLOfElementById('author', author)
}

function setMessage(message){
  setInnerHTMLOfElementById('message', message);
}

function setInnerHTMLOfElementById(elementId, innerHtml){
  document.getElementById(elementId).innerHTML = innerHtml;
}

function getRandomQuote(){
  const randomNumber = getRandomNumber();

  return quotes[randomNumber];
}


function getRandomNumber(){
  const randomNumber = getRandomArbitrary(0, quotes.length);
  if(randomNumber === currentRandomNumber){
    return getRandomNumber();
  }

  currentRandomNumber = randomNumber;
  return randomNumber;

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

