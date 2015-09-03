//adding image overlay on portfolio page

//problem: user when clicking on image goes to a dead end
//solution: create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay
$("body").append($overlay);

//capture the click event on a link to an image
$("#apislist a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //show the overlay
  $overlay.show();
  
  //get childs alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
  

//when overlay is clicked
$overlay.click(function() {
  
  //hide the overlay
  $overlay.hide();
});
  

