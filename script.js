alert("js is connected");
let quotes = [
    "Believe you can and you are halfway there",
    "Your only limit is your mind",
    "Everyday is a second chance",
    "Be stronger than your excuses",
    "Make today count!",
    "You are capable of more than you know",
    "There is still hope, never give up"

];

let index = 0;
//to show next quote
function showQuote() {
    document.getElementById("quoteText").innerText = quotes[index];

     index++;
    if (index >= quotes.length) {
        index = 0; 

    }
}