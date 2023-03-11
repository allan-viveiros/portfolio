// Give a class to the animation
const spans = document.querySelectorAll('h1 span')
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

// // Handle active class on sidebar
// const btnHome = document.querySelector("#btnHome");
// const btnAbout = document.querySelector("#btnAbout");
// const btnWorks = document.querySelector("#btnWorks");
// const btnContact = document.querySelector("#btnContact");

// function toggleActiveClass(button) {
//     btnHome.classList.remove("active");
//     btnWorks.classList.remove("active");
//     btnContact.classList.remove("active");
//     btnAbout.classList.remove("active");

//     button.classList.add("active");
// }


// const sideMenu = document.querySelector(".sideBar");
// sideMenu.addEventListener("click", function(e) {    
//     // toggleActiveClass(e.target);  
//     console.log("reload");
      
//     // location.reload();
// });




/****************************** */

/*
const element = document.getElementById('smHeading');

const keyframes = [
  { transform: 'scale3d(1, 1, 1)' },
  { transform: 'scale3d(1.25, 0.75, 1)' },
  { transform: 'scale3d(0.75, 1.25, 1)' },
  { transform: 'scale3d(1.15, 0.85, 1)' },
  { transform: 'scale3d(0.95, 1.05, 1)' },
  { transform: 'scale3d(1.05, 0.95, 1)' },
  { transform: 'scale3d(1, 1, 1)' }
];

const options = {
  duration: 1000,
  fill: 'both',
  easing: 'ease-in-out'
};

const animation = element.animate(keyframes, options);

animation.pause();
element.classList.add('rubberBand');

element.addEventListener("mouseover", function() {
    animation.play();
});
*/

// const sections = document.querySelectorAll("section");

// document.addEventListener("scroll", () => {
//     sections.forEach(section => {
//         const sectionSize = section.getBoundingClientRect();
//         console.log(`top: ${sectionSize.top}`);
//         console.log(`bottom: ${sectionSize.bottom}`);

//         if(sectionSize.top < 0 && sectionSize.bottom <= 0){
//             console.log(section.id);
//         }
//         // if(sectionSize.top < window.innerHeight && sectionSize.bottom >= 0) {
//         //     console.log(section.id);
//         // }
//         // else {

//         // }
//     })
// })

// const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", () => {
//     let current = "";

//     sections.forEach(section => {
//         let sectionTop = section.offsetTop;

//         if(scrollY >= sectionTop) {
//             current = section.getAttribute("id");
            
//         }
//     });

//     const aLinks = document.querySelectorAll(".sideBar a");
//     aLinks.forEach(a => {
//         a.classList.remove("active");
//         document.querySelector("a[href=#"+current+"]").classList.add("active");
//     })
// })


// Active link on scrolling
const sections = document.querySelectorAll("section");
const aLinks = document.querySelectorAll(".sideBar a");
// console.log(aLinks);
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

// Copyright year update
const currentYear = document.getElementById("copyRight");
let currentDate = new Date().toString();
currentYear.textContent = currentDate.slice(11, 15);
       
