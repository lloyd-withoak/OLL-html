document.addEventListener("DOMContentLoaded", function(event) { 
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:2,
            nav:true
          },
            600:{
            items:3,
            nav:true
          },
          1000:{
            items:4,
            nav: true,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
    })

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
            600:{
            items:3,
            nav:true
          },
          1000:{
            items:4,
            nav: true,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
      })

      $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
            600:{
            items:3,
            nav:true
          },
          1000:{
            items:3,
            nav: false,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
      })
      $('.owl-four').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
            600:{
            items:3,
            nav:true
          },
          1000:{
            items:5,
            nav: true,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
      })
      $('.owl-five').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
            600:{
            items:3,
            nav:true
          },
          1000:{
            items:4,
            nav: false,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
      })

      $('.owl-publications').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
            600:{
            items:3,
            nav:true
          },
          1000:{
            items:3,
            nav: false,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
      })
      $('.owl-home').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
            600:{
            items:1,
            nav:true
          },
          1000:{
            items:1,
            nav: false,
            navText:["<div class='nav-btn prev-slide'>‹</div>","<div class='nav-btn next-slide'>›</div>"],
            loop:true,
            slideBy:4,
            dots: true,
          }
        }
      })


})