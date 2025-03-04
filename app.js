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


// Chatbot functionality
        // Wait for DOM to load
    document.addEventListener("DOMContentLoaded", function() {
            const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");

    // Open Chatbot
    chatbotBtn.addEventListener("click", function() {
        chatbotContainer.style.display = "block";
            });

    // Close Chatbot
    closeBtn.addEventListener("click", function() {
        chatbotContainer.style.display = "none";
            });

    // Send Message on Button Click
    sendBtn.addEventListener("click", sendMessage);

    // Send Message on Enter Key
    userInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
        sendMessage();
                }
            });

    // Initial Welcome Message
    appendMessage("AI", "Hello! I'm your fitness AI assistant. How can I help you with workouts, diet, or exercise today?");
        });

    // Send Message Function
    async function sendMessage() {
            const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    // Display user's message
    appendMessage("You", userInput);
    document.getElementById("user-input").value = ""; // Clear input

    // Fetch AI response
    const response = await fetchGeminiResponse(userInput);
    appendMessage("AI", response);

    // Scroll to the latest message
    const messagesDiv = document.getElementById("chatbot-messages");
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

    // Append Message to Chat
    function appendMessage(sender, text) {
            const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text || "Sorry, I couldn't process that."}`;
    document.getElementById("chatbot-messages").appendChild(messageDiv);
        }

    // Fetch Response from Gemini API
    async function fetchGeminiResponse(userMessage) {
            const API_KEY = "YOUR_GEMINI_API_KEY_HERE"; // Replace with your actual API key
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    const requestBody = {
        contents: [
    {
        role: "system",
    parts: [{text: "You are a fitness expert. Always provide answers related to fitness, workouts, diet, nutrition, and exercise. If a query is unrelated, politely ask the user to rephrase it with a fitness focus." }]
                    },
    {
        role: "user",
    parts: [{text: userMessage }]
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

    if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure about that. Please ask a fitness-related question!";
            } catch (error) {
        console.error("API Error:", error);
    return "Error: Unable to reach the AI. Please try again.";
            }
        }
