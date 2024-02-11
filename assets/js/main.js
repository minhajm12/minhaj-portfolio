// MENU OFFCANVAS

// Open Menu
let menu_open = document.querySelector('.menuopen')
let menucanvs = document.querySelector(".menucnvs")

menu_open.addEventListener('click', function (event) {
      menucanvs.classList.toggle('menucnvs-active')
      event.stopPropagation();
})

// Close Menu
let menu_close = document.querySelector('.menuclose')
menu_close.addEventListener('click', function () {
      document.querySelector(".menucnvs").classList.remove('menucnvs-active')
})


//Click Outside Display None
// document.body.addEventListener('click', event => {
//       // check if the clicked element is the 'my-element' element or one of its children
//       const clickedElement = event.target;
//       const myElement = document.querySelector('.menuopen');
//       if (myElement.contains(clickedElement)) {
//         // do nothing if the clicked element is the 'my-element' element or one of its children
//         return;
//       }

//       // remove the 'active' class from the 'my-element' element
//       document.querySelector('.menucnvs').classList.remove('menucnvs-active')
//     });


    document.addEventListener("click", function(event) {
      // Check if the clicked element is outside of the dropdown div
      if (!menucanvs.contains(event.target) && event.target !== menu_open) {
          menucanvs.classList.remove('menucnvs-active'); // Hide the dropdown div
      }
  });












// BANNER INFINITE SLIDER
 // World Wide Countries Slick Slider

 if(document.querySelector('.main-items') !== null){
      $('.main-items').slick({
        // dots: true,
      infinite:true,
      loop:true,
        autoplay:true,
        autoplaySpeed:0,
        speed:3000,
        cssEase:'linear',
        slidesToShow: 10,
        slidesToScroll:1,
        pauseOnHover:false,
        draggable: false, 
      //   rtl: true, // Set rtl to true to reverse the direction
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                speed:2000
              }
            }
          ]
      })
    }


    if (document.querySelector('.main-items-2') !== null) {
      $('.main-items-2').slick({
        infinite: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: 'linear',
        slidesToShow: 10,
        slidesToScroll: 1,
        pauseOnHover: false,
        draggable: false, 
      //   rtl: true, // Set rtl to true to reverse the direction
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              speed: 2000,
            },
          },
        ],
      });
    }








    // const headerWidth = document.getElementById('para-w').offsetWidth;
    // document.documentElement.style.setProperty('--header-width', `${headerWidth}px`);