// window.onload = function() {
//     var card = document.getElementById('card');
//     card.addEventListener('click', function() {
//         card.classList.toggle('flipped');
//         setTimeout(function() {
//         card.classList.remove('flipped');
//       }, 5000); // 5000 milliseconds = 5 seconds
//     });
// };

var counter = 0;
var cards = [];
var flipped = [];
var matchedPairs = [];
var startTime;
var symbols = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍"];

function createCards(){
    var pairs = symbols.concat(symbols)
    pairs = shuffleArray(pairs)
    var container = document.getElementById('card-container')
    pairs.forEach(function(symbol){
        var card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `<div class='card'>
                            <div class='card-face-front'></div>
                            <div class='card-face-back'>${symbol}</div>`
    card.addEventListener('click',function(){
        if(!card.classList.contains('flipped') && flippedCards.length < 2){
            card.classList.add('flipped')

            if(flippedCards.length ===2){
                checkMatch
            }
        }
    })
    container.appendChild(card)
    cards.push(card)
    })
}