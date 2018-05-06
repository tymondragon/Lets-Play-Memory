$(document).ready(function() {
  M.AutoInit();
  $('.modal').modal();
  $(".button").click(function() {
    let request = "http://www.omdbapi.com/?apikey=9537e44&s=horror&type=movie&page=6"
    $.getJSON(request).then(function(result) {
      console.log(result)
      for (let i = 0; i < 10; i++) {
      let card = $("<div>", {
        "id": "card",
        "class": "col s3"
      })
      let image = $("<img>", {
        "class": "image responsive-img",
        "src": result.Search[[Math.floor(Math.random() * 10)]].Poster
      })
      $("#game-board").append(card.append(image))
      }
      $('.image').click(function() {
        alert("hello")
        event.preventDefault()
      })
    })
  })
})
