$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
      $(this).addClass('oppenned');
      event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
      $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
      $('.open').removeClass('oppenned');
      event.stopPropagation();
    });
  });

/* our team*/
 $(document).ready(function() {

            $(window).load(function() {

                $('#loadOverlay').fadeOut('slow');

            })

        })
$( document ).ready(function() {
$('.menu-item').hover(function () {
    $('#active', this).toggleClass('active');
    $('#active', this).css({'display':'block'}); //adds context
});
});