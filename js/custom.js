///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          $(".navbar").addClass("new-bg");
        //   $(".nav-link").addClass("new-color");
        //   $("input").addClass("new-input");
        //   $(".search-icon").addClass("new-search-icon");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
          $(".navbar").removeClass("new-bg");
        //   $(".nav-link").removeClass("new-color");
        //   $("input").removeClass("new-input");
        //   $(".search-icon").removeClass("new-search-icon");
        }   
    });
  } // end if

  function buttonUp(){
    var valux = $('.sb-search-input').val(); 
       valux = $.trim(valux).length;
       if(valux !== 0){
           $('.sb-search-submit').css('z-index','99');
       } else{
           $('.sb-search-input').val(''); 
           $('.sb-search-submit').css('z-index','-999');
       }
}

let $search = $('.search'),
clazz = 'search--active';

$('#search_btn').on('click', e => {
  $search.addClass(clazz);
  $search.on(transitionProp, e => {
    $search.find('input').first().focus();
  });
});

$('#close_btn').on('click', e => {
  $search.removeClass(clazz);
});

$(document).on('click', e => {
  if ($(e.target).is('.search--active')) {
    $search.removeClass(clazz);
  }
});



var transitionProp = function () {var n = document.createElement("fakeelement"),i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (var t in i) if (void 0 !== n.style[t]) return i[t];}();

$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 2,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});