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

  $(function() {
    var form = $('#contactform');
    var formMessages = $('#form-messages');
    $(form).submit(function(event) {
      event.preventDefault();
      var formData = $(form).serialize();
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
      }).done(function(response) {
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');
          $(formMessages.h3).text(response);
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
      }).fail(function(data) {
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');
          if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
          } else {
              $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
      }); //end of form submit
    }); //end of event listener 
  }); //end of form submit function

}); //end of ready