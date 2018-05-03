$(document).ready(function() {
  $("button").click(function() {
    // console.log("button clicked");
    // $.ajax({url: "http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json", success: function(result){
    $.getJSON("https://pixabay.com/api/?key=8894637-462007c160bd1caa95ff495ca&q=yellow+flowers&image_type=photo").then(function(result) {
      for (let i=0; i< 10; i++){
      
      $(".image").attr("src",result.hits[i]["largeImageURL"])
      console.log(i)
    }
      // let weather = result.current_observation.weather
      // document.querySelector("p").innerHTML = result.current_observation.weather
      // console.log(document.querySelector("p"));
      console.log(result)
    })
  })
})
