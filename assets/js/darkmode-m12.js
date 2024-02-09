var darkmodeswitcher = document.getElementById("dark-main");

function darkModeSwitcher() {
    function dark_mode(id, cls){
        if(document.getElementById(id) != null){
           document.getElementById(id).classList.toggle(cls)
        }
    }
    function dark_class(txt,cls){
        if(document.querySelector(txt) != null){
          document.querySelector(txt).classList.toggle(cls)
        }
    }
      function dark_mode_classes(txt,cls){
          document.querySelectorAll(txt).forEach(item => item.classList.toggle(cls) )
    }


    dark_mode('dark-main', 'active')
    dark_class('body', 'bg-dark')
    dark_class('.headersection', 'headersection-dark')
    dark_class('.menucnvs', 'menucnvs-dark')
    dark_mode_classes('p', 'text-white')
    dark_mode_classes('h1', 'text-white')
    dark_mode_classes('h2', 'text-white')
    dark_mode_classes('h3', 'text-white')
    dark_mode_classes('h4', 'text-white')
    dark_mode_classes('h5', 'text-white')
    dark_mode_classes('h6', 'text-white')
    // dark_mode_classes('i', 'text-white')
    dark_mode_classes('a', 'text-white')



    document.querySelectorAll('.logo-light').forEach(item => item.classList.toggle('d-none'))
    document.querySelectorAll('.logo-dark').forEach(item => item.classList.toggle('d-none'))

   document.querySelector('.dark-menu').classList.toggle('d-none')
   document.querySelector('.light-menu').classList.toggle('d-none')

}   


darkmodeswitcher.addEventListener('click', darkModeSwitcher);

console.log();








// // Darkmode Switcher Button


// var switcher = document.getElementById("switcher");

// function darkMode() {
//   function dark_mode(id,cls){
//     if(document.getElementById(id) != null){
//        document.getElementById(id).classList.toggle(cls)
//     }
//   }
//   function dark_mode_class(txt,cls){
//     if(document.querySelector(txt) != null){
//       document.querySelector(txt).classList.toggle(cls)
//     }
//   }
//   function dark_mode_classes(txt,cls){
//       document.querySelectorAll(txt).forEach(item => item.classList.toggle(cls) )
//   }




//   dark_mode('switcher', 'active')
// }
            
// switcher.addEventListener("click", function(){

//   darkMode()
//   if(switcher.classList.contains('active')){
//     localStorage.setItem('mode','dark')
//   }else{
//     localStorage.setItem('mode', 'light')
//   }
// })

// let mode = localStorage.getItem('mode')
// if(mode === 'dark'){
//   darkMode()
// }

