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

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('light');
    document.querySelector('header').classList.toggle('light');
    document.querySelector('.achievements').classList.toggle('light');
    document.querySelector('.portfolio').classList.toggle('light');
    document.querySelector('.contact').classList.toggle('light');
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

document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.href.startsWith('http')) {
            window.location.href = this.href;
        }
    });
});

// Chatbot Button Click to Open Chat
document.getElementById("chatbot-btn").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "block";
});

// Close Button Click
document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});

// Send Button Click
document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});

// Function to Send Message to Gemini API
async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    appendMessage("You", userInput);
    document.getElementById("user-input").value = "";

    // // Check if the question is fitness-related
    // if (!isFitnessRelated(userInput)) {
    //     appendMessage("AI", "I'm here to assist with fitness-related queries. Please ask something about workouts, diet, or exercise.");
    //     return;
    // }

    // Call Gemini API
    const response = await fetchGeminiResponse(userInput);
    appendMessage("AI", response);
}

// Function to Append Messages
function appendMessage(sender, text) {
    let messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    document.getElementById("chatbot-messages").appendChild(messageDiv);
}

// Function to Filter Out Non-Fitness Queries
function isFitnessRelated(question) {
    const fitnessKeywords = ["workout", "exercise", "gym", "diet", "nutrition", "calories", "muscle", "yoga", "cardio", "strength", "protein", "fat loss", "weight gain", "fitness", "running", "cycling", "bodybuilding"];
    return fitnessKeywords.some(keyword => question.toLowerCase().includes(keyword));
}

// Function to Fetch AI Response from Gemini API
async function fetchGeminiResponse(userMessage) {
    const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API Key
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    const requestBody = {
        contents: [
            {
                role: "system",
                parts: [
                    { text: "You are a fitness expert. Always provide answers related to fitness, workouts, diet, nutrition, and exercise. If a query is unrelated, politely ask the user to rephrase it with a fitness focus." }
                ]
            },
            {
                role: "user",
                parts: [{ text: userMessage }]
            }
        ]
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure about that. Please ask a fitness-related question!";
    } catch (error) {
        return "Error: Unable to reach AI.";
    }
}

function isFitnessRelated(question) {
    const fitnessKeywords = ["workout", "exercise", "gym", "diet", "nutrition", "calories", "muscle", "yoga", "cardio", "strength", "protein", "fat loss", "weight gain", "fitness", "running", "cycling", "bodybuilding"];
    
    console.log("User Question:", question);
    let isRelated = fitnessKeywords.some(keyword => question.toLowerCase().includes(keyword));
    console.log("Is Fitness Related:", isRelated);
    
    return isRelated;
}
// Function to check system theme preference
function setThemeBasedOnSystemPreference() {
    // Detect if dark mode is preferred by the system
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // If dark mode is preferred, add a 'dark' class to the body
    if (prefersDarkScheme) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
}

// Initial check when page loads
setThemeBasedOnSystemPreference();

// Listen for changes to the system theme preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setThemeBasedOnSystemPreference);

let isToggle = true;
document.getElementsByClassName('navbar-toggle')[0].addEventListener('click',()=>{
    if(isToggle){
        document.getElementById('myNavbar').style.display = 'block';
        isToggle = false;
    }else{
        document.getElementById('myNavbar').style.display = 'none';
        isToggle = true;
    }
});
