document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            window.location.href = 'HomePage.html';
        }
    });
});

function validateForm() {
    let isValid = true;


    const name = document.querySelector('input[placeholder="Name"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const password = document.querySelector('input[placeholder="Password"]');
    const age = document.querySelector('input[placeholder="Age"]');
    const gender = document.querySelector('input[name="Gender"]:checked');

    if (name.value.trim() === '') {
        alert('Name is required.');
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }


    if (password.value.trim() === '') {
        alert('Password is required.');
        isValid = false;
    } else if (password.value.length < 6) {
        alert('Password must be at least 6 characters long.');
        isValid = false;
    }


    if (age.value.trim() === '' || isNaN(age.value) || age.value <= 0) {
        alert('Please enter a valid age.');
        isValid = false;
    }


    if (!gender) {
        alert('Please select a gender.');
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    if (email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')) {
        return true;
    }
    return false;
}
