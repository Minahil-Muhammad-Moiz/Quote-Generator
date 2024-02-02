let url = 'https://quote-garden.onrender.com/api/v3/quotes';
let quotePara = document.querySelector('#Quote');
let author = document.querySelector('#qtAuthor');

const getQuote = async ()=>{
    let response = await fetch(url);
    let filter = await response.json();
    let quotes = filter.data;
    let randomNum = Math.floor(Math.random()*(quotes.length-1));
    let quote = quotes[randomNum].quoteText;
    let qotAuth = quotes[randomNum].quoteAuthor;
    quotePara.innerText = quote;
    author.innerText = `--${qotAuth}`;
}

document.querySelector('#btn').addEventListener('click', getQuote);