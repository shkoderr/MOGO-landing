$(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      navbarH = $("#header").innerHeight(),
      scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset)  {

    if( scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  /* Smooth scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    
    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top - navbarH;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("#slider__inner a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
          scrollTop: blockOffset
        }, 500);

  });







  /* Menu nav toggle*/
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });


  //Collapse menu//
  $(".nav__link").click(function(event) {

    $(".nav")
      .removeClass("active");
    $(".nav-toggle")
      .removeClass("active");
  });

  $(".header__logo").click(function(event) {

    $(".nav")
      .removeClass("active");
    $(".nav-toggle")
      .removeClass("active");

  });

  $(document).on('mouseup', function(e){
    $(".nav")
    .removeClass("active");
    $(".nav-toggle")
    .removeClass("active");
  });

  $(document).on('touchstart', function(e){
    $(".nav")
    .removeClass("active");
    $(".nav-toggle")
    .removeClass("active");
  });


  /* Collapse */
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
    blockId = $this.data('collapse');

    $this.toggleClass("active");


  });


  /* Slider */
  $("[data-slider]").slick({
    infinity: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1

  });

});