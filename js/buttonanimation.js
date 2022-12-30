/* Settings Hover buttons */

$(document).ready(function() {
  $( "#settings a" ).each(function() {
    var tipt = $(this).attr('title');
    $(this).attr('title','');
    $(this).append('<span>');
    $(this).children('span').text(tipt);
    var spanWidth = $(this).children('span').width() + 20;
    var spanMarg = 0 - spanWidth/2;
    $(this).children('span').css('width',spanWidth);
    $(this).children('span').css('margin-left',spanMarg);
    $(this).hover (
      function() {
        $(this).children('span').fadeIn();
        $('#settings a').css('opacity','.1');
        $(this).css('opacity','1');
      }, function() {
        $(this).children('span').fadeOut();
        $('#settings a').css('opacity','1');
      }
    );
  });                    
});