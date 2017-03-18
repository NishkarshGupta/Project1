$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $('#myCarousel').carousel({
    interval:   4000
  });

  var clickEvent = false;
  $('#myCarousel').on('click', '.nav a', function() {
    clickEvent = true;
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.nav').children().length -1;
      var current = $('.nav li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.nav li').first().addClass('active');
      }
    }
    clickEvent = false;
  });

  var jssor_1_options = {
    $AutoPlay: true,
    $Idle: 0,
    $AutoPlaySteps: 4,
    $SlideDuration: 2500,
    $SlideEasing: $Jease$.$Linear,
    $PauseOnHover: 4,
    $SlideWidth: 140,
    $Cols: 7
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*responsive code begin*/
  /*remove responsive code if you don't want the slider scales while window resizing*/
  function ScaleSlider() {
    var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
      refSize = Math.min(refSize, 809);
      jssor_1_slider.$ScaleWidth(refSize);
    }
    else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*responsive code end*/
});
