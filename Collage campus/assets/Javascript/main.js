
//navbar background color on scroll
const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () =>{
    let scroll_up = window.scrollY;

    if(scroll_up > 20){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    } 
});

// mobile menu
const hambuger = document.querySelector('.navbar .menu-btn i');
const mobile_menu = document.querySelector('.navbar .nav-links');
const menu_items = document.querySelectorAll('.navbar .nav-links li a');

hambuger.addEventListener('click', ()=>{
    hambuger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_items.forEach(item =>{
    item.addEventListener('click', ()=>{
        hambuger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// scroll up btn
scrollupBtn = document.querySelector('.scroll-up-btn');

document.addEventListener('scroll', () =>{
    let scrolled = window.scrollY;
    
    if(scrolled > 400){
        scrollupBtn.classList.add('show')
    }else{
        scrollupBtn.classList.remove('show');
    }
});

scrollupBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

// call to action section
function clickOn(){
    const container = document.getElementById('container');
    const cta =  document.getElementById('cta');

    if(container.style.display === "block"){
        container.style.display = "none";
        cta.innerText = "CONTACT US";
    }else{
        container.style.display = "block";
        cta.style.display = "none";
    }
};

// footer copyright section
const year = document.getElementById('year');

currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear;