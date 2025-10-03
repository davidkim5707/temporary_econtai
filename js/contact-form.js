/**
 * EconTAI - Contact Form Handler
 * Web3Forms integration for newsletter signup
 */

// ============================================
// Web3Forms Submission Handler
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');

    // Only run if form exists on this page
    if (!form) return;

    const successMessage = document.getElementById('success-message');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;

        // Prepare form data
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Submit to Web3Forms API
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Show success message
                successMessage.style.display = 'block';
                form.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Submission failed');
            }

            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error subscribing. Please try again.');

            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    });
});
