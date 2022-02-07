const quoteEl = document.querySelector('#quote-text')
const autherEl = document.querySelector('#auther-text')
const loaderEl = document.querySelector('.loader')
const errText = document.querySelector('.err-text')
const errContainer = document.querySelector('.err-container')
const containerEl = document.querySelector('.container')
const btnNewQuote = document.querySelector('#btn-new-quote')
const btnTwitter = document.querySelector('.btn-twitter')

//quote arr definitionc
let apiQuotes = []

function loading() {
  apiQuotes ? (loaderEl.hidden = true) : (loaderEl.hidden = true)
}

function changeQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
  quoteEl.textContent = quote.text
  autherEl.textContent = quote.author || 'Unknown'
}
function tweetQuote() {
  const url = `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${autherEl.textContent}`
  window.open(url, '_blanck')
}

async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes/')
    apiQuotes = await response.json()
    //show container
    containerEl.hidden = false
    changeQuote()
  } catch (error) {
    errText.textContent = `${error.message}`
    errContainer.hidden = false
  }
}

getQuotes()
loading()

btnNewQuote.addEventListener('click', changeQuote)
btnTwitter.addEventListener('click', tweetQuote)
