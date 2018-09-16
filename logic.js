// On click run API Call
$("#submit").on("click", function (event) {
    event.preventDefault();
  
    // test as string variable
    var queryText = "";
  
    // value of text as input by user
    queryText = $("#textinput").val().trim();
  
    if(queryText === ""){
      return
    }
  
    else{
    
    // concatinated URL to used in GET request
    var queryURL = "https://jamiembrown-tweet-sentiment-analysis.p.mashape.com/api/?text="+queryText;
    
    // GET request to Tweet Sentiment Analysis, log response object and append sentiment data to display div
    $.ajax({
      url: queryURL,
      headers: { 'X-Mashape-Key': 'nvzqDaui7zmsh0UaACSl45l86j0Ap1uk83Ujsnwo36O3TxOcf7' },
      method: "GET"
    }).then(function(response) {
      console.log(response);
  
      $("#display").prepend("<br><div id=newdisplay> <h1> Text: "+ '\u0022' + response.string + '\u0022' + "</h1> <p id='newp'>The Statement was <strong>" + response.sentiment + "</strong> with a score of <strong>" + response.score + "</strong>!</p></div>");
  
    });
  
    // reset text input back to clear
    $("#textinput").val("");
  
    }});