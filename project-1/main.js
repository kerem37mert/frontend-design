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


//Certificates
let certificatesImg = document.querySelectorAll(".certificatesInfo img");

for(let i=1; i<=certificatesImg.length; i+=3)
{
    certificatesImg[i].style.marginLeft = "2%";
    certificatesImg[i].style.marginRight = "2%";
}


for(let i=1; i<=certificatesImg.length; i+=3)
{
    certificatesImg[i].style.marginLeft = "2%";
    certificatesImg[i].style.marginRight = "2%";
}

for(let i=0; i<certificatesImg.length; i++)
{
    if((i+3) < certificatesImg.length)
    {
        certificatesImg[i].style.marginBottom = "2%";
    }
}

for(let i=0; i<certificatesImg.length; i++)
{
    certificatesImg[i].addEventListener("click", (event) => {

        let style = event.target.style;


        console.log(event);

    });
}