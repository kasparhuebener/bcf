window.onload = function(event) {
  /* call slideshow function */
  aload();
  toggleSlideshow();
};
window.onresize = function(event) {
  toggleSlideshow();
  initSkrollr();
}

/* based on scrolling, show menu bar if not on mobile */
$(document).scroll(function() {
  toggleHeader();
});
$(document).bind('touchmove',function(e) {
  toggleHeader();
});

$(document).ready(function(){
  $('#thanks-modal')
      .modal('show');
  initModals();
  initMobileMenu();
  initSkrollr();

  $('#tickets a.button').click(function(e) {
    ga('send','event','ticket','click', e.target.id);
  });
});

function isMobile() {
  return window.matchMedia("only screen and (max-width: 768px)").matches;
}

function isTablet() {
  return window.matchMedia("only screen and (max-device-width: 1024px)").matches;
}

function initSkrollr() {
  /* if max-width unlike touch device, init skrollr */
    /* initialize skrollr */
  if (!isTablet()) {
      var s = skrollr.init({
        forceHeight: false
      });

      /* initialize skrollr menu */
      //The options (second parameter) are all optional. The values shown are the default values.
      skrollr.menu.init(s, {
          //skrollr will smoothly animate to the new position using `animateTo`.
          animate: true,
          //The easing function to use.
          easing: 'outCubic',
          //Multiply your data-[offset] values so they match those set in skrollr.init
          //scale: 2,
          //How long the animation should take in ms.
          duration: function(currentTop, targetTop) {
              //By default, the duration is hardcoded at 500ms.
              return 700;

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
              //flickity gallery wants focus before working.
              //Programmatically set focus when navigating via skrollr-menu to save 1 click.
              if (newHash === "#festival") {
                setTimeout(function() {
                  $('.gallery').focus();
                }, 700);
              };
          }
      });
  }
}

function initModals() {
  /* initialize modals */
  $('#definition-btn').click(function() {
    $('#definition-modal')
      .modal('show');
    ga('send', 'pageview', 'definition');
  });
  $('#support-btn').click(function() {
    $('#support-modal')
      .modal('show');
    ga('send', 'pageview', 'support');
  });
  $('#location-btn').click(function() {
    $('#location-modal')
      .modal('show');
    ga('send', 'pageview', 'location');
  });
  $('#artist1-btn').click(function() {
    $('#artist1')
      .modal('show');
    ga('send', 'pageview', 'artist1');
  });
  $('#open-stage-btn').click(function() {
    $('#open-stage')
      .modal('show');
    ga('send', 'pageview', 'open-stage');
  });
  $('#artist2-btn').click(function() {
    $('#artist2')
      .modal('show');
    ga('send', 'pageview', 'artist2');
  });
  $('#artist3-btn').click(function() {
    $('#artist3')
      .modal('show');
    ga('send', 'pageview', 'artist3');
  });
  $('#artist4-btn').click(function() {
    $('#artist4')
      .modal('show');
    ga('send', 'pageview', 'artist4');
  });
  $('#artist5-btn').click(function() {
    $('#artist5')
      .modal('show');
    ga('send', 'pageview', 'artist5');
  });
  $('.modal .close.icon').click(function(e) {
    //if modal closed, send another pageview of index page
    ga('send', 'pageview');
  });
}

function initMobileMenu() {
  /* initialize mobile menu */
  $('#mobile-menu-btn').click(function() {
    $('#mobile-menu')
      .sidebar('setting','dimPage', false)
      .sidebar('toggle')
    ;
  });
  $('#mobile-menu a').click(function() {
    $('#mobile-menu')
      .sidebar('hide')
    ;
  });
}

function toggleSlideshow() {

  /* initialize flickity slideshow*/
  flkty = $('#festival').flickity({
    // options
    cellSelector: '.cell',
    setGallerySize: false, 
    wrapAround: true, 
    autoPlay: 4000,
    imagesLoaded: true
  });

  if (!isMobile()) {
    /* slide show only makes sense on not mobile screens */
    $('#festival').toggleClass('noscript');
    $('#festival').flickity('resize');

    /* in case sidebar is open on resize, close */
    $('#mobile-menu').sidebar('hide');
  }
  else {
    /* hide .cells since they are not needed */
    $('#festival').toggleClass('noscript');
    $('#festival').flickity('destroy');

    /* in case sidebar is open on resize, close */
    $('#header').sidebar('hide');
  }
}

function toggleHeader() {
    /* TODO: fix header on iPad.
    ** register for the right touch events
    ** and check window.innerHeight
    */ 
  if (!isMobile()) {
    var distance = $(this).scrollTop(); 
    
    if (distance > $(window).height()-200) {
      $('#header')
        .sidebar('setting','dimPage', false)
        .sidebar('setting','closable', false)
        .sidebar('show')
      ;
    } else {
      $('#header').sidebar('hide');
    }
  }
}