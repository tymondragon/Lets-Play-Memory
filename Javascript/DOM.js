// let Tile = require('./main.js');




$(document).ready(function() {
  M.AutoInit();
  // $('.modal').modal();

  ////////////Muh Variables/////////////////////

  let moves = 0
  let count = 0
  // let second = 0, minute = 0
  let timer = $("#timer")
  let interval;
  let cardChoice = []
  let cardsArray = $(".card")
  let deckOfCards = $("#deckOfCards")

  ////////////Muh Variables/////////////////////



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
  ////////////////shuffle the cards using the Fisher-Yates shuffle//////


  /////////////////Timer///////////////////
  let clock = {
    second: 0,
    minute: 0,
    start: function() {
      this.interval = setInterval(function() {
        timer.text(`${clock.minute} minutes ${clock.second} seconds`)
        clock.second++;
        if (clock.second == 60) {
          clock.minute++;
          clock.second = 0;
        }
      }, 1000);
    },
    pause: function() {
      clearInterval(this.interval);
      delete this.interval;
    },
    resume: function() {

      if (!this.interval) {
        clock.start();
      }
    }
  }
  /////////////////Timer///////////////////
  ////////////////////Match Function///////////////////////////
  function match() {
    $.map(cardChoice, function(what) {
      $(what).addClass("correct")
    })
    count++
    moves++
    if (count === 8) {
      clearInterval(interval);
      $(cardsArray).off("click")
      $('#You-Win').modal('open')
      $("#minutes").text(minute)
      $("#seconds").text(second)
    }
    console.log(moves)
  }
  ////////////////////Match Function///////////////////////////

  ///////////////////Do Not Match Function //////////////////////////
  function doNotMatch() {
    $.map(cardChoice, function(what) {
      $(what).children().toggleClass("hide")
      $(what).toggleClass("show")
    })
    moves++
    console.log(moves)
  }
  ///////////////////Do Not Match Function //////////////////////////


  ////////////////////////Picking Two Cards///////////////////////
  function pickPairs(what) {
    $(what).children().toggleClass("hide")
    $(what).toggleClass("show")
    $(what).addClass("chosen")
    cardChoice.push(what)
    if (cardChoice.length === 2) {
      setTimeout(compare, 750, cardChoice)
    }
  }
  ////////////////////////Picking Two Cards///////////////////////


  //////////////////CardChoice/////////////////////////////
  ///////////////////This is to see if the cards match//////////////
  //////////////////// I know it is bad JU-JU to use an id for more than one element.  But this is the best way for me to identify cards//////////////////////////////////////////////////////////
  function compare(array) {
    if (array[0].id === array[1].id) {
      match(cardChoice)
      cardChoice = []
    } else {
      doNotMatch(cardChoice)
      cardChoice = []
    }
  }
  //////////////////CardChoice/////////////////////////////

  ///////////////////////Game Over//////////////

  ///////////////////////Game Over//////////////



  //////////let's get each card into the deck ///////////////////////
  ////////////////////////start the game by pressing play!!!!!/////
  $("#lets-play").click(function() {
    shuffleDeck(cardsArray)
    deckOfCards.empty()
    for (let j = 0; j < cardsArray.length; j++) {
      deckOfCards.append(cardsArray[j])
    }
    $(this).prop("disabled", true);
    clock.start()
    $(cardsArray).on("click", function() {
      if ($(this).children().hasClass("hide") && cardChoice.length < 2) {
        pickPairs(this)
      }
      event.preventDefault()
    })
  })
  $("#quit").click(function() {
    clock.pause()
  })
  $("#no").click(function(){
    clock.resume()
  })
})
//////////let's get each card into the deck ///////////////////////





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
