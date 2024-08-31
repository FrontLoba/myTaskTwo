const signUpForm = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const eMail = document.getElementById('email');
const country = document.getElementById('country');
const phone = document.getElementById('telNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const checkbox = document.getElementById('togglePswd');
const createBtn = document.getElementById('submit_btn');

// createBtn.disabled = true;

let dataForm = [];
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const dataText = {
    first: firstName.value,
    last: lastName.value,
    email: eMail.value,
    country: country.value,
    password: password.value,
    // first: firstName.value,
  };
  dataForm.push(dataText);
  saveSignUpData();
  firstName.value =
    lastName.value =
    eMail.value =
    country.value =
    phone.value =
    password.value =
    confirmPassword.value =
      '';
});

function saveSignUpData() {
  //   const signUpData = signUpForm.forEach((input) => input.value);
  let data = JSON.stringify(dataForm);
  localStorage.setItem('signUpData', data);
}

const validateFirstName = () => {
  let firstNameValue = firstName.value.trim();
  if (firstNameValue == '') {
    errorMessage(firstName, 'Enter your first name');
  } else if (isValidName(firstNameValue)) {
    errorMessage(firstName, 'First Name cannot accept number');
  } else {
    success(firstName);
  }
};
const validateLastName = () => {
  const lastNameValue = lastName.value.trim();
  if (lastNameValue == '') {
    errorMessage(lastName, 'Enter your last name');
  } else if (isValidName(lastNameValue)) {
    errorMessage(lastName, 'Last Name cannot accept number');
  } else {
    success(lastName);
  }
};

const validateEmail = () => {
  emailValue = eMail.value.trim();
  if (emailValue == '') {
    errorMessage(eMail, 'Provide a valid email address');
  } else if (!isEmail(emailValue)) {
    errorMessage(eMail, 'Invalid email or character is not acceptable');
  } else {
    success(eMail);
  }
};

const validatePassword = () => {
  let passwordValue = password.value.trim();
  if (passwordValue == '') {
    errorMessage(password, 'Provide desirable password');
  } else if (!isValidPassword(passwordValue)) {
    errorMessage(password, 'Password must have atleast 8 characters');
  } else {
    success(password);
  }
};

const validateConfirmPassword = () => {
  let confirmPasswordValue = confirmPassword.value.trim();
  let passwordValue = password.value.trim();

  if (confirmPasswordValue == '') {
    errorMessage(
      confirmPassword,
      'Confirm your password i.e enter your password again'
    );
  } else if (passwordValue != confirmPasswordValue) {
    errorMessage(confirmPassword, 'Password does not match');
  } else {
    success(confirmPassword);
  }
};

const validateCountry = () => {
  createCountryList();
  if (country.value == '') {
    errorMessage(country, 'Select your country');
  } else {
    success(country);
  }
};

const validatePhoneNo = () => {
  phoneValue = phone.value.trim();
  if (phoneValue == '') {
    errorMessage(phone, 'Enter your phone number');
  } else if (phoneValue.length !== 11) {
    errorMessage(phone, 'Incomplete digit - it must be 11-digit');
  } else if (isPhoneNumber(phoneValue)) {
    errorMessage(phone, 'Phone number accept digit only');
  } else {
    success(phone);
  }
};

const isValidPassword = (password) => {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};

const errorMessage = (input, message) => {
  const formControl = input.parentElement;
  small = formControl.querySelector('small');
  formControl.className = 'formControl error';
  small.innerText = message;
};

const isValidName = (name) => {
  let regEx = /\d|\d[^0-9]|[^0-9]\d/gi;
  return name.match(regEx);
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const isPhoneNumber = (number) => {
  return /^d[0-9]{11}$/.test(number);
};

const success = (input) => {
  const formControl = input.parentElement;
  small = formControl.querySelector('small');
  formControl.className = 'formControl success';
};

// Validation check
let firstNameValidation = firstName.addEventListener('blur', (e) => {
  e.preventDefault();
  validateFirstName();
});

let lastNameValidation = lastName.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLastName();
});

let emailValidtion = eMail.addEventListener('blur', (e) => {
  e.preventDefault();
  validateEmail();
});

let passwordValidtion = password.addEventListener('blur', (e) => {
  e.preventDefault();
  validatePassword();
});

let confirmPasswordValidtion = confirmPassword.addEventListener('blur', (e) => {
  e.preventDefault();
  validateConfirmPassword();
});

let phoneValidtion = phone.addEventListener('blur', (e) => {
  e.preventDefault();
  validatePhoneNo();
});

let countryValidation = country.addEventListener('blur', (e) => {
  e.preventDefault();
  validateCountry();
});

const createCountryList = () => {
  const nations = [
    'Benin Republic',
    'Cameroon',
    'Liberia',
    'Ghana',
    'South Africa Republic',
    'Nigeria',
    'Niger Republic',
    'Togo',
  ];
  nations.forEach((nation, index) => {
    country.insertAdjacentHTML(
      'beforeend',
      `
      <option value="${nation}" data-country="${index}">${nation}</option>
        `
    );
  });
};
createCountryList();
// console.log(country.querySelectorAll('option').value);
// toggle password character using checkbox
checkbox.addEventListener('click', () => {
  if (password.type && confirmPassword.type === 'password') {
    password.type = 'text';
    confirmPassword.type = 'text';
  } else {
    password.type = 'password';
    confirmPassword.type = 'password';
  }
});
