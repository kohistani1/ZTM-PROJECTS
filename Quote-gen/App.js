const quoteEl = document.querySelector('#quote-text')
const autherEl = document.querySelector('#auther-text')
const copyQuote = document.querySelector('.copy-Quote')
const containerEl = document.querySelector('.container')
const btnNewQuote = document.querySelector('#btn-new-quote')

//quote arr definitionc
let apiQuotes = []
let quote = ''

const copyText = () => {
  const quoteText = `${quote.text}  --${quote.author || 'Unknown'}`
  navigator.clipboard.writeText(quoteText)
  alert('quote copied')
}
function changeQuote() {
  quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
  quoteEl.textContent = quote.text
  autherEl.textContent = quote.author || 'Unknown'
}

async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes/')
    apiQuotes = await response.json()
    changeQuote()
  } catch (error) {
    errText.textContent = `${error.message}`
  }
}

getQuotes()

btnNewQuote.addEventListener('click', changeQuote)
copyQuote.addEventListener('click', copyText)
