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

  $('#festival-container').flickity({
    // options
    cellSelector: '.cell',
    setGallerySize: false, 
    wrapAround: true, 
    autoPlay: 4000,
    imagesLoaded: true
  });

  var s = skrollr.init({
    forceHeight: false
  });

  //The options (second parameter) are all optional. The values shown are the default values.
  skrollr.menu.init(s, {
      //skrollr will smoothly animate to the new position using `animateTo`.
      animate: true,

      //The easing function to use.
      easing: 'sqrt',

      //Multiply your data-[offset] values so they match those set in skrollr.init
      scale: 2,

      //How long the animation should take in ms.
      duration: function(currentTop, targetTop) {
          //By default, the duration is hardcoded at 500ms.
          //return 700;

          //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
          //return Math.abs(currentTop - targetTop) * 1;
      },

      //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
      //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
      //handleLink: function(link) {
      //    return 400;//Hardcoding 400 doesn't make much sense.
      //},

      //By default skrollr-menu will only react to links whose href attribute contains a hash and nothing more, e.g. `href="#foo"`.
      //If you enable `complexLinks`, skrollr-menu also reacts to absolute and relative URLs which have a hash part.
      //The following will all work (if the user is on the correct page):
      //http://example.com/currentPage/#foo
      //http://example.com/currentDir/currentPage.html?foo=bar#foo
      ///?foo=bar#foo
      complexLinks: false,

      //This event is triggered right before we jump/animate to a new hash.
      change: function(newHash, newTopPosition) {
          //Do stuff
      }
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
    $('header.sidebar')
      .sidebar('setting','dimPage', false)
      .sidebar('setting','closable', false)
      .sidebar('show')
    ;
  } else {
    $('header.sidebar').sidebar('hide');
  }
});