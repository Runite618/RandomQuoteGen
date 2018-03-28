var quotesArr = [
	'It is better to be feared than loved, if you cannot be both. Niccolo Machiavelli.',
	'Being entirely honest with oneself is a good exercise. Sigmund Freud.',
	'There is only one happiness in this life, to love and be loved. George Sand.',
	'Life isn\'t about finding yourself.',
	'The only true wisdom is in knowing you know nothing',
	'Don\'t cry because it\'s over, smile because it happened. Dr. Seuss',
	'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best. Marilyn Monroe',
	'Be yourself; everyone else is already taken. Oscar Wilde',
	'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. Albert Einstein',
	'So many books, so little time. Frank Zappa'
]

function genQuote() {
	var randNum = Math.floor(Math.random() * (quotesArr.length));
	document.getElementById('showQuote').innerHTML = quotesArr[randNum];
}

function addQuote() {
	var quoteToAdd = document.getElementById("addQuoteTextArea").value;
	document.getElementById("addQuoteTextArea").value = "";
	quotesArr.push(quoteToAdd);
}