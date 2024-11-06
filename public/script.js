document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        contact: formData.get('contact'),
        organization: formData.get('organization'),
        gender: formData.get('gender')
    };

    // Send the form data to the server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
        this.reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your data.');
    });
});
