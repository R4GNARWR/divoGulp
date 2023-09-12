const swipersTypical = document.querySelectorAll('.swiper-typical')

const mainSwiper = new Swiper('.main-swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-main__next',
        prevEl: '.swiper-main__prev',
      },
      pagination: {
        el: ".swiper-main__pagination",
        type: "fraction",
      },
    breakpoints:
    {
      1: 
      {

      },
      991:
      {
      }
    }
    
  });

  if(swipersTypical)
  {
      swipersTypical.forEach(swiper => {
        const swiperId = swiper.id;
        const mainSwiper = new Swiper( '#'+swiperId, {
          loop: true,
          // effect: 'fade',
          navigation: {
              nextEl: '.'+swiperId+'__next',
              prevEl: '.'+swiperId+'__prev',
            },
            pagination: {
              el: '.'+swiperId+'__pagination',
              type: "fraction",
            },
        });
      });
  }