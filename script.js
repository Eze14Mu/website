document.addEventListener('DOMContentLoaded', function() {
    // Fetch server status
    fetch('https://api.mcsrvstat.us/2/your.server.ip')
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById('server-status');
            if (data.online) {
                statusElement.innerHTML = `<p>Server is online with ${data.players.online} players.</p>`;
            } else {
                statusElement.innerHTML = '<p>Server is offline.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
        });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:', { name, email, message });

        // You can add code here to send the form data to your email or server

        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
