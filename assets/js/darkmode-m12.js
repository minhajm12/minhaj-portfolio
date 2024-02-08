var darkmodeswitcher = document.getElementById("dark-main");

function darkModeSwitcher() {
    function dark_mode(id, cls){
        if(document.getElementById(id) != null){
           document.getElementById(id).classList.toggle(cls)
        }
    }
    function dark_classes(txt,cls){
        if(document.querySelector(txt) != null){
          document.querySelector(txt).classList.toggle(cls)
        }
    }
      function dark_mode_classes(txt,cls){
          document.querySelectorAll(txt).forEach(item => item.classList.toggle(cls) )
    }


    dark_mode('dark-main', 'active')


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

