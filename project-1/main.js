let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu");
let menu = document.querySelector(".menu");

const menuChange = () => {
    
    if(openMenu.style.display != "none")
    {
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
        menu.style.display = "block";
    }
    else if(openMenu.style.display == "none")
    {
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
        menu.style.display = "none";
    }
    
}


openMenu.addEventListener("click",menuChange);
closeMenu.addEventListener("click",menuChange);


