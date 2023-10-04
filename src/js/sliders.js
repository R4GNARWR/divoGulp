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

  mainSwiper.on('slideChange', () => {
  
    const activeSlide = mainSwiper.slides[mainSwiper.activeIndex];
    const activeSlideText = activeSlide.dataset.label;
    const mainSliderContentText = document.querySelector('.main-swiper__content-label');
   
    if (mainSliderContentText && activeSlideText)
    {
      mainSliderContentText.innerHTML = activeSlideText;
    }

    // if (mainSliderContentBtnText && activeSlideBtnText)
    // {
    //   mainSliderContentBtnText.text = activeSlideBtnText;
    // }
    
  })

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