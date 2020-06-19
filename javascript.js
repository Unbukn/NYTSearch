$("button").on("click", function() {
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {



    });
  });

  $.ajax({
  url: queryURL,
  method: 'GET'
  }).then(function(response){
  
  });

//   KEY fUAV70oYpTeS4X52k9Ce031QOrQOi4Tg