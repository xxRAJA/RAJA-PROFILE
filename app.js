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

// Scroll to Top functionality
window.onscroll = function () {
    var scrollButton = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";  // Show the button
    } else {
        scrollButton.style.display = "none";   // Hide the button when near top
    }
};

// Scroll to top functionality when button is clicked
document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
