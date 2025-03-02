// Wait for the page to load
window.addEventListener('load', function () {
    // Get the loader and content elements
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    document.body.style.overflowY = 'hidden';

    const myBtn = document.getElementById('scrollToTopBtn')
    const chatBtn = document.getElementById('chatbot-btn')
    myBtn.style.display = 'none'
    chatBtn.style.display = 'none'

    // Set a time after that time the loader will removed
    setTimeout(function () {
        loader.style.display = 'none';
        content.style.display = 'block'; 
        myBtn.style.display = 'block'
        chatBtn.style.display = 'block'
        document.body.style.overflowY = 'auto';
    }, 3000);
});
