$(document).ready(function() {

  $(function() {
    $('.dropdown').hover(function() {
      $('.dropdown').css('background-color', '#555555');
    }, function() {
      // on mouseout, reset the background colour
      $('.dropdown').css('background-color', '');
    });
  }); //end of dropdown hover

  $(function() {
    $('.flyout').hover(function() {
      $('.flyout').css('background-color', '#4C4C4C');
    }, function() {
      // on mouseout, reset the background colour
      $('.flyout').css('background-color', '');
    });
  }); //end of flyout hover

}); //end of ready