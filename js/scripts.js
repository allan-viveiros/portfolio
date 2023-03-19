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
    const inputName = document.getElementById("formName");
    const inputEmail = document.getElementById("formEmail");
    const inputMessage = document.getElementById("formMessage");
    const submitButton = document.getElementById("submitForm");

    if(inputName.value.trim() && inputEmail.value.trim() && inputMessage.value.trim()){ 
        submitButton.classList.add("sending");

        const url = new URL("https://emailvalidation.abstractapi.com/v1/");
        url.search = new URLSearchParams ({
            api_key: "763a7706a10048b785b5c501ea3b088e",
            email: inputEmail.value
        });

        fetch(url)
        .then((resp) => {
            if(resp.ok) {
                return resp.json();
            }
            else {
                throw new Error(resp);
            }            
        })
        .then((responseJson) => {
            if(responseJson.deliverability === "DELIVERABLE") {
                formContact.submit();
                submitButton.classList.remove("sending"); 
                formContact.reset();
            }
            else {
                alert("Please, type an valid email!");
                inputEmail.focus(); 
                submitButton.classList.remove("sending");                
            }
        })
        .catch((e) => {
            if(e.code >= 400) {                
                //the is some problem occur.
                //could be too many request or month limit reached
                //Submit the form to the formspree verification
                formContact.submit();
                submitButton.classList.remove("sending");
                formContact.reset();
            }
            else {
                alert("This email was not sent!");
            }            
        });        
    }
    else if(inputName.value.trim() === "") {
        alert("Please, tell me your name!");
        inputName.focus();
    }    
    else if(inputEmail.value.trim() === "") {
        alert("Please, tell me your email!");
        inputEmail.focus();
    }
    else if(inputMessage.value.trim() === "") {
        alert("Please, leave your message!");
        inputMessage.focus();
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
