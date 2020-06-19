$("#searchbtn").on("click", function() {
    event.preventDefault()
    var search = $('#search').val()
    var numberOf = $("#numberOf").val()
    console.log(search)
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=fUAV70oYpTeS4X52k9Ce031QOrQOi4Tg";
    console.log(queryURL)
    


    
 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)
        
    // first clear out the results container
    $("#results").empty();
    for (i = 0; i < numberOf; i++) {
        // get current article title
        var articleTitle = response.response.docs[i].headline.main
        console.log(articleTitle)
        // var leadPara = response.response.docs[i].
        // get web url
        // var webUrl = response.response.docs[i].web_url
        console.log(articleTitle)
        // create a new div
        var newDiv = $("<div>")
        // add a para for the article name
        var newPara = $("<p>")
        // name the paragraph with the current doc abstract
        newPara.text(articleTitle)
        newPara.appendTo(newDiv);
        newDiv.appendTo("#results");
        
    }    
    

    });


    // Headline
    // var headline = response.?
    // Body
    // var body = response.?

    




});

$("#clear").on("click", function() {
    event.preventDefault()
    $('#search').val('')
    $('#numberOf').val('')
    $('#startYear').val('')
    $('#endYear').val('')

});
// Alex, here are the ids

// numberOf

//   KEY fUAV70oYpTeS4X52k9Ce031QOrQOi4Tg