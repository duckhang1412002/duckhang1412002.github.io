window.onload = function () {
    let navItem = document.querySelectorAll("#menu li.dropdown");
    for (i = 0; i < navItem.length; i++) {
        var img = new Image();
        img.src = "/img/menu-down.png";
        img.className = "menu-dropdown-icon";
        if (i == 3 || i == 4) 
            img.style.left = "12.5rem";
        navItem[i].appendChild(img);
    }
}

function myFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("menu").style.display == "flex") 
    document.getElementById("menu").style.display = "none";
    else document.getElementById("menu").style.display = "flex";
}

let navItem = document.querySelectorAll("#menu li.dropdown");
for (i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
        if(window.innerWidth < 1024){
            let navItemContent = this.getElementsByClassName("dropdown-content")[0];
            let navItemIcon = this.getElementsByClassName("menu-dropdown-icon")[0];
            let navItemText = this.getElementsByTagName("a")[0];
            if (navItemContent.style.display=="block") {
                navItemContent.style.display="none";
                navItemIcon.src="/img/menu-down.png";
                navItemText.style.color="#757575";
            } else { 
                navItemContent.style.display="block";   
                navItemIcon.src="/img/menu-up.png";
                navItemText.style.color="#292929";
            }
        }
    }); 
}
