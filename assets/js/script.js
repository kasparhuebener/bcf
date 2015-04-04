$(document).ready(function(){
  /* call resize function */
  resizeElements();

  /* initialize modals */
  $('#support-btn').click(function() {
    $('#support-modal')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });
  $('#location-btn').click(function() {
    $('#location-modal')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });
  $('#artist1-btn').click(function() {
    $('#artist1')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });
  $('#artist2-btn').click(function() {
    $('#artist2')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });
  $('#artist3-btn').click(function() {
    $('#artist3')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });
  $('#artist4-btn').click(function() {
    $('#artist4')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });
  $('#artist5-btn').click(function() {
    $('#artist5')
      .modal('show');
    ga('send', 'event', 'button', 'click', this.id);
  });

  /* initialize mobile menu */
  $('#mobile-menu-btn').click(function() {
    $('#mobile-menu')
      .sidebar('setting','dimPage', false)
      .sidebar('toggle')
    ;
  });

  /* initialize skrollr */
  var s = skrollr.init({
    forceHeight: false
  });

  /* initialize skrollr menu */
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
	resizeElements();
}

function resizeElements() {
	vpw = $(window).width();
	vph = $(window).height();

  /* initialize flickity slideshow*/
  flkty = $('#festival').flickity({
    // options
    cellSelector: '.cell',
    setGallerySize: false, 
    wrapAround: true, 
    autoPlay: 4000,
    imagesLoaded: true
  });
  //console.log("init flickity");

  if (vpw > 768) {
    /* 
    ** If screen is not mobile, set content height via JS.
    ** Needed for large screens.
    */
	  $('#intro').css({'height': vph + 'px'});
	  $('.gallery').css({'height': vph + 'px'});

    /* slide show only makes sense on not mobile screens */
    $('#festival').flickity('resize');
  }
  else {
    /* detach .cells from DOM since they are not needed */
    $('#festival').flickity('destroy');

    $('#intro').removeAttr('style');
    $('.gallery').removeAttr('style');

    /* in case sidebar is open on resize, close */
    $('#header').sidebar('hide');
  }
}

/* based on scrolling, show menu bar if not on mobile */
$(document).scroll(function() {
  // Version 1: set relative to element
  // var skrollrInstance = skrollr.get();
  // var offsetFestival =skrollrInstance.relativeToAbsolute(document.getElementById('#festival'), 'top', 'top');
  
  // Version 2: hardcoded
  // Show element after user scrolls 500px
  // but only for not mobile devices.
if (typeof vpw != 'undefined' && vpw > 768) {
  var y = $(this).scrollTop();
  // check for y > 500
  if (y > vph-200) {
    $('#header')
      .sidebar('setting','dimPage', false)
      .sidebar('setting','closable', false)
      .sidebar('show')
    ;
  } else {
    $('#header').sidebar('hide');
  }
}
});