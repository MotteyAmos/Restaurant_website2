const getElement = (element)=>{
    return document.querySelector(element);
}

const getElements = (element)=>{
    return document.querySelectorAll(element);
}

// show menu on small device when toogle had been click
let toggleMenu = getElement(".menu-toggle");
let body = getElement("body");

toggleMenu.addEventListener("click", ()=>{
    body.classList.toggle("open");
})

//active nav link
let navLinks = getElements(".nav-link");


for (let i=0; i<navLinks.length; i++){

    navLinks[i].addEventListener("click", ()=>{
        var currentPage = getElement(".active");
        currentPage.className = currentPage.className.replace("active", "");
        navLinks[i].className += " active";
    })
}


//animate 

window.sr = ScrollReveal();

sr.reveal(".animateTop",{
    origin:"top",
    duration:1000,
    distance:"25rem",
    delay:300,
    reset: true
});

sr.reveal(".animateLeft",{
    origin:"left",
    duration:1000,
    distance:"25rem",
    delay:300,
    reset: true
});

sr.reveal(".animateRight",{
    origin:"right",
    duration:1000,
    distance:"25rem",
    delay:300,
    reset: true
});

sr.reveal(".animateBottom", {
    origin: "bottom",
    duration:1000,
    distance:"25rem",
    delay:600,
    reset:true
})