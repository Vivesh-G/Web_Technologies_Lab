const form = document.getElementById('RegistrationForm')

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('mobnum');
const ageInput = document.getElementById('age');
const genderInputs = document.getElementsByName('gender');

const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('mobError');
const ageError = document.getElementById('ageError');
// Gender error element will be dynamically selected if present
let genderError = document.getElementById('genderError');

const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Ensure genderError is always up-to-date (in case DOM changes)
    genderError = document.getElementById('genderError');
    if(validateForm()) {
        alert("Form submitted successfully");
        form.reset();
        clearStyles();
    }
});

function clearStyles() {
    document.querySelectorAll('input, textarea').forEach(input => {
      input.classList.remove('valid');
      input.classList.remove('invalid');
    });
}

function validateForm() {
    let valid = true;
    
  // First Name
  const fnameVal = fnameInput.value.trim();
  if (fnameVal.length < 3 || !/^[a-zA-Z\s]+$/.test(fnameVal)) {
    fnameError.textContent = 'Enter a valid first name (min 3 letters, letters only)';
    fnameInput.classList.add('invalid');
    valid = false;
  } else {
    fnameError.textContent = '';
    fnameInput.classList.remove('invalid');
    fnameInput.classList.add('valid');
  }

    //Last Name
    const lnameVal = lnameInput.value.trim();
    if (lnameVal.length < 3 || !/^[a-zA-Z\s]+$/.test(lnameVal)) {
      lnameError.textContent = 'Enter a valid last name (min 3 letters, letters only)';
      lnameInput.classList.add('invalid');
      valid = false;
    } else {
      lnameError.textContent = '';
      lnameInput.classList.remove('invalid');
      lnameInput.classList.add('valid');
    }

  // Email
  const emailVal = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    emailError.textContent = 'Enter a valid email';
    emailInput.classList.add('invalid');
    valid = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  }

  // Phone
  const phoneVal = phoneInput.value.trim();
  if (!/^\d{10}$/.test(phoneVal)) {
    phoneError.textContent = 'Enter a 10-digit phone number';
    phoneInput.classList.add('invalid');
    valid = false;
  } else {
    phoneError.textContent = '';
    phoneInput.classList.remove('invalid');
    phoneInput.classList.add('valid');
  }

  // Age
  const ageVal = parseInt(ageInput.value.trim());
  if (isNaN(ageVal) || ageVal < 18) {
    ageError.textContent = 'Age must be at least 18';
    ageInput.classList.add('invalid');
    valid = false;
  } else {
    ageError.textContent = '';
    ageInput.classList.remove('invalid');
    ageInput.classList.add('valid');
  }

  // Gender
  const genderSelected = Array.from(genderInputs).some(input => input.checked);
  if (!genderSelected) {
    if (genderError) genderError.textContent = 'Please select your gender';
    valid = false;
  } else {
    if (genderError) genderError.textContent = '';
  }

  return valid;
}
  