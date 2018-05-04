$(document).ready(function() {
  $("button").click(function() {
    // $.getJSON("https://pixabay.com/api/?key=8894637-462007c160bd1caa95ff495ca&q=arcade+games&image_type=photo").then(function(result) {console.log(result.hits[5]["largeImageURL"])
    $.getJSON("https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/dfgkfivjrhcksyymh9vw.jpg").then(function(result) {
      console.log(result)
      // for (let i = 0; i < 15; i++) {
      //   let image = $("<img>", {
      //     "class": "image",
      //     "src": result.hits[i]["largeImageURL"]
      //   })
      //   $("#div1").append(image)
      // }
      // $('.image').click(function() {
      //   alert("hello")
      //   event.preventDefault()
      })
      // $(".image").attr("src",result.hits[i]["largeImageURL"])
      // $('<div />', {
      //       "class": 'test',
      //       text: "a div",
      //       click: function(e){
      //           e.preventDefault();
      //           alert("test")
      //       }})
      // $("#burger").click(function() {
      //   let itemPrice = menu["burger"]
      //   event.preventDefault();
      //   let row = $("<tr></tr>")
      //   let burg = $("<td id='royale'>Royale With Cheese</td>")
      //   let burgPrice = $("<td id='burgPrice' class='right-align'>$8.99</td>")
      //   $("#order").append(row, burg, burgPrice)
      //   subNumber += itemPrice
      //   return total(subNumber)

    })
    // let weather = result.current_observation.weather
    // document.querySelector("p").innerHTML = result.current_observation.weather
    // console.log(document.querySelector("p"));
    // console.log(result)
  })
