// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
            
    if (localStorage.getItem("hasVisited")==='true') {
        welcomeMessage.textContent = "Welcome back!";
    } else {
        localStorage.setItem("hasVisited", true);
        welcomeMessage.textContent = "Welcome! This is your first visit.";
    }
    
    setTimeout(() => {
        welcomeMessage.style.display = "none";
    }, 5000);
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Form validation and submission
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for your message! We'll get back to you soon.");

        // Clear the form
        contactForm.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Portfolio hover effect
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});
let audio = document.getElementById('heroaudio')
document.addEventListener('click',()=>{
    audio.play();
})
 type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aryan Thakur",
  "jobTitle": "Fitness Trainer & Personal Growth Advocate",
  "url": "https://raja-profile.vercel.app/",
  "sameAs": [
    "https://www.instagram.com/aryanthakur",
    "https://www.linkedin.com/in/aryanthakur"
  ]
}

