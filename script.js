$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height() - 20;
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
