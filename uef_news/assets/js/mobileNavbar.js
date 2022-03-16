var header = document.querySelector(".header")
var mobileNavbarMenu = document.querySelector("#mobile-menu");
var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
var headerHeight = header.clientHeight;
// click to open mobile-menu-navbar
mobileNavbarMenu.onclick = function(){
    // if header had a height header, it can't show mobile menu navbar.  
    var isClosed = headerHeight === header.clientHeight;
    if(isClosed){
        header.style.height = "auto";
        // 
        mobileMenuBtn.classList.add("navbar-active");
    }else{
        header.style.height = null;
        mobileMenuBtn.classList.remove("navbar-active");
        
    }
}


// click mobile-menu-item-navbar and close navbar

var navbarMobileItems = document.querySelectorAll(".navbar__mobile-item");
for(key in navbarMobileItems){
   var navbarMobileItem = navbarMobileItems[key];
    navbarMobileItem.onclick = function() {
        header.style.height = null;
        mobileMenuBtn.classList.remove("navbar-active");
    }
}
