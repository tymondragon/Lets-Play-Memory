$(document).ready(function() {
  $("button").click(function() {
    let request="http://www.omdbapi.com/?apikey=9537e44&s=horror&type=movie&page=6"
    $.getJSON(request).then(function(result) {
      console.log(result)
      for (let i = 0; i < 10; i++) {
        let image = $("<img>", {
          "class": "image",
          "src": result.Search[[Math.floor(Math.random()*10)]].Poster
        })
        $("#div1").append(image)
      }
      $('.image').click(function() {
        alert("hello")
        event.preventDefault()
      })
    })
  })
})
