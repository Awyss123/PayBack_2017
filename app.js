$(document).ready(function() {

 	function displayWWEGiphs() {

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=wwe payback&api_key=dc6zaTOxFJmzC&limit=6";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(results);
        	for (var i = 0; i < results.length; i++) {
        	
        	var showDiv = $("<div class='col-xs-4'>");

        	var giphSrc = results[i].images.fixed_height.url;
        	var showImage = $("<img>");

            showImage.attr("src", giphSrc);
        	showImage.addClass("giphy");
        	showDiv.append(showImage);
        	$("#gifArea").prepend(showDiv);

        }
	});
}
displayWWEGiphs();

var trivBrock = true;

$("#seth").on("click", function(){
    if (trivBrock === true) {
        $("#trivAns").html("");
        $("#trivAns").html("<img src=https://media.giphy.com/media/o7s803OXuPq2Q/giphy.gif>");
        (trivBrock = false);
    } else if (trivBrock === false) {
        $("#trivAns").html("");
        (trivBrock = true);
    }

});

var trivGold = true;

$("#joe").on("click", function(){
    if (trivGold === true) {
        $("#trivJoe").html("");
        $("#trivJoe").html("<img src=https://media.giphy.com/media/8ealZkWk8uSYg/giphy.gif>");
        (trivGold = false);
    } else if (trivGold === false) {
        $("#trivJoe").html("");
        (trivGold = true);
    }
});

});