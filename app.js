// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Typewriter effect
const lines = [
    "Hii, this is Aryan Thakur",
    "I am a passionate Fitness",
    "Enthusiast, Gym Member",
    "and Personal Growth",
    "Advocate"
];

let currentLine = 0;
let currentChar = 0;
const speed = 100; // Speed of typing effect

function typeWriter() {
    if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
            document.getElementById("typewriter").innerHTML += lines[currentLine].charAt(currentChar);
            currentChar++;
            setTimeout(typeWriter, speed);
        } else {
            // Move to the next line
            currentLine++;
            currentChar = 0;
            if (currentLine < lines.length) {
                document.getElementById("typewriter").innerHTML += "<br>"; // Add line break
            }
            setTimeout(typeWriter, speed);
        }
    } else {
        // Reset for loop effect
        setTimeout(() => {
            currentLine = 0;
            currentChar = 0;
            document.getElementById("typewriter").innerHTML = ''; // Clear the content
            typeWriter(); // Restart the typing effect
        }, 1500); // Delay before restarting
    }
}

window.onload = function () {
    typeWriter(); // Start typing effect
};

// Scroll button and chatbot
// Open/Close Chatbot
document.getElementById("chatbot-btn").onclick = function () {
    document.getElementById("chatbot-container").style.display = "flex";
};

document.getElementById("close-btn").onclick = function () {
    document.getElementById("chatbot-container").style.display = "none";
};

// Achievement section style
document.addEventListener("DOMContentLoaded", () => {
    const achievements = document.querySelector('.achievements');

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                achievements.classList.add('show'); // Trigger Fade-In
                observer.unobserve(achievements); // Stop Observing after Animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% is visible

    observer.observe(achievements);
});


// Scrollbutton Functionality
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}