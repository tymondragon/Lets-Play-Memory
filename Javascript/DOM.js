$(document).ready(function() {
  M.AutoInit();
  $('.modal').modal({
    dismissible: false
  });

  bestTime = JSON.parse(localStorage.getItem('bestTime')) || {
    minute: 0,
    second: 0,
    timeSecond: 10000,
  }

  let moves = 0
  let count = 0
  // let second = 0, minute = 0
  let timer = $("#timer")
  let interval;
  let cardChoice = []
  let cardsArray = $(".card")
  let deckOfCards = $("#deckOfCards")

  ////////////Muh Variables/////////////////////


  ///////////////////////////////Best Time//////////////////////////

    $('#best').text(`${bestTime.minute} Minutes ${bestTime.second} Seconds`)

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
    timeSecond:0,
    second:0 ,
    minute: 0,
    start: function() {
      this.interval = setInterval(function() {
        timer.text(`Minutes ${clock.minute} Seconds ${clock.second}`)
        clock.second++;
        clock.timeSecond++;
        console.log(bestTime.timeSecond, clock.timeSecond)
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
      $(what).addClass("correct animated rubberBand")
    })
    count++
    moves++
    $("#moves").text(`Moves ${moves}`)
    finish(count)

  }
  ////////////////////Match Function///////////////////////////

  ///////////////////Do Not Match Function //////////////////////////
  function doNotMatch() {
    $.map(cardChoice, function(what) {
      $(what).children().toggleClass("hide")
      // $(what).toggleClass("show")
      $(what).toggleClass("background-style show")

    })
    moves++
    $("#moves").text(moves)
  }
  ///////////////////Do Not Match Function //////////////////////////


  ////////////////////////Picking Two Cards///////////////////////
  function pickPairs(what) {
    $(what).children().toggleClass("hide")
    $(what).toggleClass("show")
    $(what).addClass("chosen")
    $(what).toggleClass("background-style")

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
  /////////You Win modal///////////////////////////////
  function youWin() {
    $('#good-job').modal('open')
    $("#best-minutes").text(`${clock.minute}`)
    $("#best-seconds").text(`${clock.second}`)
    $("#best-moves").text(`${moves}`)
      localStorage.setItem("bestTime", JSON.stringify(bestTime))
  }
  ////////////////////////////////////////////////////

  /////////Nice Try modal///////////////////////////////
  function niceTry() {
    $('#nice-try').modal('open')
    $("#modal-minutes").text(`${clock.minute}`)
    $("#modal-seconds").text(`${clock.second}`)
    $("#modal-moves").text(`${moves}`)
  }
  ////////////////////////////////////////////////////


  ///////////////////////Game Over//////////////
  function finish() {
    if (count === 1) {
      console.log(bestTime.timeSecond, clock.timeSecond)
      clearInterval(clock.interval);
      $(cardsArray).off("click")
      setTimeout(function() {
          if (clock.timeSecond < bestTime.timeSecond) {
            bestTime.second = clock.second
            bestTime.minute = clock.minute
            bestTime.timeSecond = clock.timeSecond
            youWin()
          } else {
            niceTry()
          }
      }, 1000)
    }
  }
  ///////////////////////Game Over//////////////

  //////////let's get each card into the deck ///////////////////////
  ////////////////////////start the game by pressing play!!!!!/////
  // localStorage.setItem("best", JSON.stringify(best))
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
  $("#no").click(function() {
    if (clock.second > 0) {
      clock.resume()
    }
  })
})
//////////let's get each card into the deck ///////////////////////





///////////////////////////SAVE AND USE LATER////////////////
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
