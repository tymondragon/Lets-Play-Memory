// let Tile = require('./main.js');




$(document).ready(function() {
  M.AutoInit();
  $('.modal').modal();
  ////////////////shuffle the cards using the Fisher-Yates shuffle//////
  /////////This is a more effective shuffle than just Math.floor(Math.random) by removing the card as it is shuffled back,starting from the end, into the arrray///////
  ///////////////////////////////////////////////////////
  function shuffleDeck(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  ////////////////////////////////////////////////////
  //////////let's get each card into the deck ///////////////////////
  let cardsArray = $(".card")
  let deckOfCards = $("#deckOfCards")
  ////////////////////////start the game by pressing play!!!!!/////
  $("button").click(function() {
    shuffleDeck(cardsArray)
    deckOfCards.empty()
    for (let j = 0; j < cardsArray.length; j++) {
      deckOfCards.append(cardsArray[j])
    }
    $(this).prop("disabled", true);
    console.log("hello", deckOfCards, "this is the card", $(".card"))
    $('.card').click(function() {
      event.preventDefault()
    })
  })
})









///////////////////////////SAVE AND USE////////////////
////loop to create instances of cards with a position on grid///
// $("button").click(function() {
//    $(this).prop("disabled",true);
//   for (let i = 0; i < 16; i++) {
//     let card = $("<div>", {
//       "class": "card-back"
//     })
//     $("#game-board").append(card)
//     console.log("ready")
//   }
////////////////////////////////////////////////////////////////
///////////////////////////// })/////////////////////////////////////

////////////////////////////API????????????/////////////////////////
// $("button").click(function() {
//   let cardCount = 0;
//   for (let i = 0; i < 36; i++) {
//   let omdb = "http://www.omdbapi.com/?apikey=9537e44&s=horror&type=movie&page="
//   let number  = Math.floor(Math.random()*200)
//   let request = omdb+number
//   console.log(request)
//   $.getJSON(request).then(function(result) {
//       if (cardCount < 36 && result.Search[Math.floor(Math.random()*10)].Poster !== "N/A") {
//           let card = $("<div>")
//           let image = $("<img>", {
//             "class": "image",
//             "src": result.Search[i].Poster
//           })
//           $("#game-board").append(card.append(image))
//           cardCount ++;
//       }
//     })
//   }
// })
////////////////////////////////API///////////////////////////////
// $('.image').click(function() {
//   alert("hello")
//   event.preventDefault()
//   })
// })
