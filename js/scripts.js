// Give a class to the rubberBand animation
const spans = document.querySelectorAll('h1 .letter')
spans.forEach(span => 
    span.addEventListener('mouseover', function(e) {
        span.classList.add('animated', 'rubberBand')
    })
);
spans.forEach(span => 
    span.addEventListener('mouseout', function(e) {
        span.classList.remove('animated', 'rubberBand')
    })
);

// Active link on scrolling
const sections = document.querySelectorAll("section");
const aLinks = document.querySelectorAll(".sideBar a");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        if(scrollPosition >= section.offsetTop - 20) {
            aLinks.forEach(link => {
                link.classList.remove("active");

                if(section.getAttribute("id") === link.getAttribute("href").substring(1)) {
                    link.classList.add("active");
                }
            });
        }
    });
});

// Hamburger menu
//Initial state of Menu
let showMenu = false;
const menuBtn = document.querySelector(".menuBtn");
const sideBar = document.querySelector(".sideBar")

menuBtn.addEventListener("click", () => {
    if(!showMenu) {
        menuBtn.classList.add("close");
        sideBar.classList.add("show");
        //The menu has been opened
        showMenu = true;
    }
    else {
        menuBtn.classList.remove("close");
        sideBar.classList.remove("show");
        //The menu has been closed
        showMenu = false;
    }
});

// Handle click on links into hamburger menu 
const sideMenu = document.querySelector(".sideBar");
sideMenu.addEventListener("click", function() {    
    if(showMenu) {
        menuBtn.classList.remove("close");
        sideBar.classList.remove("show");

        showMenu = false;
    }
});

// Form submission
const formContact = document.getElementById("formContact");
formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName");
    const email = document.getElementById("formEmail");
    const message = document.getElementById("formMessage");

    if(name.value.trim() && email.value.trim() && message.value.trim()){
        formContact.submit();
        formContact.reset();
    }
    else if(name.value.trim() === "") {
        alert("Please, tell me your name!");
        name.focus();
    }    
    else if(email.value.trim() === "") {
        alert("Please, tell me your email!");
        email.focus();
    }
    else if(message.value.trim() === "") {
        alert("Please, leave your message!");
        message.focus();
    }
});

// Change the page theme (switch Button)
const body = document.querySelector("body");  
const main = document.querySelector("main"); 

const switchTheme = () => {
    const switchCheck = document.getElementById("switchCheck");
    const switchText = document.getElementsByClassName("switchText");
    
    if(switchCheck.checked) {
        switchText[0].textContent = "Good Night!"
        body.classList.remove("light");       
        menuBtn.classList.remove("light");
    }
    else {
        switchText[0].textContent = "Morning!";
        body.classList.add("light");
        menuBtn.classList.add("light");
    }
}

// Event listener to switch
const switchButton = document.getElementById("switchCheck");
switchButton.addEventListener("change", (e) => {
    switchTheme();      
});

// Verify the current switch button position on refresh
switchTheme();


// Copyright year update
const currentYear = document.getElementById("copyRight");
let currentDate = new Date().toString();
currentYear.textContent = currentDate.slice(11, 15);
