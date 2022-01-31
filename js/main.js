$(function(){
 
  $('.menu__link').on('click', function (e) {
    e.preventDefault();
  
    
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
    
  });

  $('.info-slider').slick({
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow--active"><img class="next" src="images/arrow.svg" alt=""></button>'
  });

  $('.slick-arrow').on('click', function (e) {
    e.preventDefault();
  
    
    $('.slick-arrow').removeClass('slick-arrow--active');
    $(this).addClass('slick-arrow--active');
    
  });


  $('.teachers-slider').slick({
    prevArrow: '<button type="button" class="arrow-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="arrow-next"><img src="images/arrow-right.svg" alt=""></button>',
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1031,
        settings: {
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 585,
        settings: {
          centerMode: true,
          centerPadding: '130px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 431,
        settings: {
          centerMode: true,
          centerPadding: '70px',
          slidesToShow: 1
        }
      }
    ]
  });

  var slider = $('.teachers-slider');
     $('.sl-count__total').text( slider.slick('getSlick').slideCount);
     slider.on('afterChange', function(event , slick , currentSlide) {
       $('.sl-count__current').text(currentSlide + 1);
     });





  $('.reviews-slider').slick({
    fade: true,
    prevArrow: '<button type="button" class="reviews-prev slick-arrow"><img src="images/arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="reviews-next slick-arrow--active"><img class="next" src="images/arrow.svg" alt=""></button>'
  });

  $('.slick-arrow').on('click', function (e) {
    e.preventDefault();
  
    
    $('.slick-arrow').removeClass('slick-arrow--active');
    $(this).addClass('slick-arrow--active');
    
  });
  
  $('.workshops__items').on('click', function (e) {
    e.preventDefault();
  
    
    $('.workshops__items').removeClass('workshops__items--active');
    $(this).addClass('workshops__items--active');
    
  });



  $('.courses-slider').slick({
    prevArrow: '<button type="button" class="arrow-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="arrow-next"><img src="images/arrow-right.svg" alt=""></button>',
    centerMode: true,
    centerPadding: '180px',
    responsive: [
      {
        breakpoint: 881,
        settings: {
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 661,
        settings: {
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
      
     
    ]
    
  });

  var slider = $('.courses-slider');
     $('.courses__total').text( slider.slick('getSlick').slideCount);
     slider.on('afterChange', function(event , slick , currentSlide) {
       $('.courses__current').text(currentSlide + 1);
     });



const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smothScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {

    event.preventDefault()
    const id = link.getAttribute('href').substring(1)

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
    
  })
})

$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('active');
});

});

