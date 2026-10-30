/* ==========================================
   1. MOBILE NAVIGATION
========================================== */

// Select navigation elements

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


// Toggle mobile navigation menu

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const isExpanded = navMenu.classList.contains("active");

    // Update accessibility attribute

    menuToggle.setAttribute("aria-expanded", isExpanded);

    // Change hamburger icon to close icon

    menuToggle.innerHTML = isExpanded
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});



/* ==========================================
   2. CLOSE MOBILE MENU ON LINK CLICK
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});



/* ==========================================
   3. ACTIVE NAVIGATION HIGHLIGHTING
========================================== */

// Select all website sections

const sections = document.querySelectorAll("main section[id]");


// Function to update active navigation link

function updateActiveNavigation() {

    let currentSection = "";

    // Account for sticky navigation bar

    const headerHeight = document.querySelector(".header").offsetHeight;

    const scrollPosition = window.scrollY + headerHeight + 100;


    // Identify the currently active section

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            currentSection = section.id;

        }

    });


    // Ensure Contact becomes active near the bottom of the page

    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {

        currentSection = "contact";

    }


    // Update navigation links

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


// Run when scrolling

window.addEventListener("scroll", updateActiveNavigation);


// Run when browser window is resized

window.addEventListener("resize", updateActiveNavigation);


// Run when page initially loads

updateActiveNavigation();



// Update active navigation when a section link is clicked

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(navLink => {

            navLink.classList.remove("active");

        });

        link.classList.add("active");

    });

});



/* ==========================================
   4. DYNAMIC COPYRIGHT YEAR
========================================== */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();