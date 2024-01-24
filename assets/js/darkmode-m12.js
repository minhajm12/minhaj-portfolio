var darkmodeswitcher = document.getElementById("dark-main");

function darkMode() {
    function dark_mode(id, cls){
        if(document.getElementById(id) != null){
           document.getElementById(id).classList.toggle(cls)
        }
    }


    dark_mode('dark-main', 'active')


}


darkmodeswitcher.addEventListener('click', darkMode);