const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1,nav2,nav3,nav4,nav5];

function navAnimation(direction1, direction2){
    navItems.forEach((navItem,index) => {
        navItem.classList.replace(`slide-${direction1}-${index+1}`,`slide-${direction2}-${index+1}`);
    });
}

function toggleNav(){
    // Toggle: Menu Bars open/closed
    menuBars.classList.toggle('change');
    // Toggle: menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate In - Nav items
        navAnimation('out', 'in')
    }else{
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animate Out - Nav items
        navAnimation('in', 'out')
    }
}

// Event listener
menuBars.addEventListener('click',toggleNav);
navItems.forEach((navItem) => {
    navItem.addEventListener('click',toggleNav);
})
