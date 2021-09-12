const quotes = [
    {
        quote: "Im Possible.",
        author: "Nike",
    },
    {
        quote: "Ok, next!",
        author: "",
    },
    {
        quote: "Always remember you are braver than you believe, stronger than you seem, smarter than you think and twice as beautiful as you’ve ever imagined.",
        author: "Dr. Seuss",
    },
    {
        quote: "You don’t have to control your thoughts; you just have to stop letting them control you.",
        author: "Dan Millman",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        author: "Steve Jobs",
    },
    {
        quote: "Think different.",
        author: "Steve Jobs",
    },
    {
        quote: "Live for each second without hesitation.",
        author: "Elton John",
    },
    {
        quote: "Keep calm and carry on.",
        author: "Winstion Churchill",
    },
    {
        quote: "Life would be tragic if it weren't funny.",
        author: "Stephen Hawking",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
