// MENU OFFCANVAS

// Open Menu
let menu_open = document.querySelector('.menuopen')
menu_open.addEventListener('click', function () {
      document.querySelector(".menucnvs").classList.add('menucnvs-active')
})

// Close Menu
let menu_close = document.querySelector('.menuclose')
menu_close.addEventListener('click', function () {
      document.querySelector(".menucnvs").classList.remove('menucnvs-active')
})


//Click Outside Display None
document.body.addEventListener('click', event => {
      // check if the clicked element is the 'my-element' element or one of its children
      const clickedElement = event.target;
      const myElement = document.querySelector('.menuopen');
      if (myElement.contains(clickedElement)) {
        // do nothing if the clicked element is the 'my-element' element or one of its children
        return;
      }

      // remove the 'active' class from the 'my-element' element
      document.querySelector('.menucnvs').classList.remove('menucnvs-active')
    });