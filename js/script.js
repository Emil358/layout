$(function(){

  function setup_for_width(mql) {
    if (mql.matches) {

      $('.slider__pagination').remove();

      new Swiper('.slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          450: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        },
        loop: true,
        wrapperClass: 'slider__list',
        slideClass: 'slider__item',

        navigation: {
          nextEl: ".main-slider-next",
          prevEl: ".main-slider-prev"
        },
      });
    } else {

      $('.portfolio__button').before(`
        <div class="slider__pagination paginator" aria-hidden="true"></div>
      `);

       new Swiper('.slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          450: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        },
        loop: true,
        wrapperClass: 'slider__list',
        slideClass: 'slider__item',
        pagination: {
          el: '.slider__pagination',
          type: 'bullets',
          bulletClass: 'paginator__item',
          bulletActiveClass: 'paginator__item--active',
          clickable: true
        },

      });
    }
  }

  var mql = window.matchMedia("screen and (min-width: 1235px)");

  mql.addListener(setup_for_width);

  setup_for_width(mql);



  const first__scene = document.getElementById('first__scene');
  const parallax = new Parallax(first__scene);

  const second__scene = document.getElementById('second__scene');
  const parallax__second = new Parallax(second__scene);


  $('.header__burger').on('click', function() {
    $('.header__menu-wrapper').addClass('menu__showed');
    $("html,body").css('overflow','hidden');

    $('body').addClass('fixed');
  });

  $('.header__close-menu').on('click', function() {
    $('.header__menu-wrapper').removeClass('menu__showed');
    $( "body" ).removeClass( "fixed" );
    $("html,body").css('overflow','auto');

  });

  $('.button-wrapper').on('click', function(){
    $('header, main, footer').addClass('blur');
    $('.popup-container-service').removeClass('popup-container-service--hide');
    $("html,body").css('overflow','hidden');
    $('.popup__input-service').attr("required");
    $('body').addClass('fixed');
  });

  $('.popup-container-call, .popup-container-service, .gratitude-container').on('click', function(event){
    if(event.target == this) {
      $('header, main, footer').removeClass('blur');
      $('.popup-container-service').addClass('popup-container-service--hide');
      $('.popup-container-call').addClass('popup-container-call--hide');
      $('.gratitude-container').addClass('gratitude-container--hide');
      $( "body" ).removeClass( "fixed" );
      $("html,body").css('overflow','auto');
      return false;
    }
  });

  $('.close').on('click', function(){
    $('header, main, footer').removeClass('blur');
    $('.popup-container-service').addClass('popup-container-service--hide');
    $('.popup-container-call').addClass('popup-container-call--hide');
    $('.gratitude-container').addClass('gratitude-container--hide');
    $( "body" ).removeClass( "fixed" );
    $("html,body").css('overflow','auto');
    return false;
  });

  $('.request-call, .header__request-call--width-590').on('click', function(){
    $('header, main, footer').addClass('blur');
    $('.popup-container-call').removeClass('popup-container-call--hide');
    $("html,body").css('overflow','hidden');
    $('.popup__input-call').attr("required");
    $('body').addClass('fixed');
  });


  $('.popup__send-service').on('click', function(){
    var name_service = $('.popup__input-service--name').val();
    var email_service = $('.popup__input-service--email').val();
    var tel_service = $('.popup__input-service--tel').val();

    if (name_service.length !==0 && email_service.length !==0 && tel_service.length !==0) {
      $('.popup__input-service--name').removeClass('error');
      $('.popup__input-service--email').removeClass('error');
      $('.popup__input-service--tel').removeClass('error');

      $('.popup-container-service').addClass('popup-container-service--hide');
      $('.gratitude-container').removeClass('gratitude-container--hide');

      $('.popup__input-service--name').val('');
      $('.popup__input-service--email').val('');
      $('.popup__input-service--tel').val('');

      $(".popup__input-service").removeAttr("required");

      return false;
    } else if (name_service.length !==0) {
      $('.popup__input-service--name').removeClass('error');
      $('.popup__input-service--email').removeClass('error');
      $('.popup__input-service--tel').removeClass('error');

      $('.popup__input-service--email').addClass('error');
      $('.popup__input-service--tel').addClass('error');
    } else if (tel_service.length !==0) {
      $('.popup__input-service--name').removeClass('error');
      $('.popup__input-service--email').removeClass('error');
      $('.popup__input-service--tel').removeClass('error');

      $('.popup__input-service--name').addClass('error');
      $('.popup__input-service--email').addClass('error');
    } else if (email_service.length !==0) {
      $('.popup__input-service--name').removeClass('error');
      $('.popup__input-service--email').removeClass('error');
      $('.popup__input-service--tel').removeClass('error');

      $('.popup__input-service--name').addClass('error');
      $('.popup__input-service--tel').addClass('error');
    } else {
      $('.popup__input-service--name').addClass('error');
      $('.popup__input-service--email').addClass('error');
      $('.popup__input-service--tel').addClass('error');
    }

  });

  $('.popup__send-call').on('click', function(){
    var name_call = $('.popup__input-call--name').val();
    var tel_call = $('.popup__input-call--tel').val();

    if (name_call.length !==0 && tel_call.length !==0) {
      $('.popup__input-call--name').removeClass('error');
      $('.popup__input-call--tel').removeClass('error');

      $('.popup-container-call').addClass('popup-container-call--hide');
      $('.gratitude-container').removeClass('gratitude-container--hide');

      $('.popup__input-call--name').val('');
      $('.popup__input-call--tel').val('');


      $(".popup__input-call").removeAttr("required");

      return false;
    } else if (name_call.length !==0) {
      $('.popup__input-call--name').removeClass('error');
      $('.popup__input-call--tel').removeClass('error');

      $('.popup__input-call--tel').addClass('error');
    } else if (tel_call.length !==0) {
      $('.popup__input-call--name').removeClass('error');
      $('.popup__input-call--tel').removeClass('error');

      $('.popup__input-call--name').addClass('error');
    } else {
      $('.popup__input-call--name').addClass('error');
      $('.popup__input-call--tel').addClass('error');
    }

  });

  $("#call").mask("+7(999) 999 99 99");
  $("#request-call").mask("+7(999) 999 99 99");
});
