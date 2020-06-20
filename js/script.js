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
    $(document).bind('touchmove', false);
    $('body').addClass('fixed');
  });

  $('.header__close-menu').on('click', function() {
    $('.header__menu-wrapper').removeClass('menu__showed');
    $( "body" ).removeClass( "fixed" );
    $("html,body").css('overflow','auto');
    $(document).bind('touchmove', true);
  });

  $('.button-wrapper').on('click', function(){
    $('header, main, footer').addClass('blur');
    $('.popup-container').removeClass('popup-container--hide');
    $("html,body").css('overflow','hidden');
    $(document).bind('touchmove', false);
    $('body').addClass('fixed');
  });

  $('.popup-container, .close').on('click', function(event){
    if(event.target == this) {
      $('header, main, footer').removeClass('blur');
      $('.popup-container').addClass('popup-container--hide')
      $('.popup__heading--hide, .popup__input--hide').css('display', 'block');
      $( "body" ).removeClass( "fixed" );
      $("html,body").css('overflow','auto');
      $(document).bind('touchmove', true);
    }
  });

  $('.request-call, .header__request-call--width-590').on('click', function(){
    $('header, main, footer').addClass('blur');
    $('.popup-container').removeClass('popup-container--hide');
    $('.popup__heading--hide, .popup__input--hide').css('display', 'none');
    $("html,body").css('overflow','hidden');
    $(document).bind('touchmove', false);
    $('body').addClass('fixed');
  });

});
