document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const messageContainer = document.getElementById('messageContainer');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        displayMessage(`Thank you for your message, ${name}! We'll be in touch soon.`);

        // You can add an AJAX request here to send the form data to the server
    });

    function displayMessage(text) {
        const messageElement = document.createElement('p');
        messageElement.textContent = text;
        messageElement.classList.add('message');
        messageContainer.innerHTML = '';
        messageContainer.appendChild(messageElement);
    }
});
