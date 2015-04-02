$(document).ready(function(){
	resizeDiv();

  $('#support-btn').click(function() {
    $('#support-modal')
      .modal('show');
  });
  $('#location-btn').click(function() {
    $('#location-modal')
      .modal('show');
  });
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('#intro').css({'height': vph + 'px'});
	$('.gallery').css({'height': vph + 'px'});
}

$(document).scroll(function() {
  //Show element after user scrolls 800px
  var y = $(this).scrollTop();
  if (y > 500) {
    $('header.sidebar').addClass("visible");
  } else {
    $('header.sidebar').removeClass("visible");
  }
});