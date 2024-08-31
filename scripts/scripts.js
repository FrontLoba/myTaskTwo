const form = document.querySelector('#form');
const firstName_input = document.querySelector('#firstName');
const lastName_input = document.querySelector('#lastName');
const email_input = document.querySelector('#email');
const country_selected = document.querySelector('#country');
const password_input = document.querySelector('#password');
const confirmPassword_input = document.querySelector('#confirmPassword');
const togglePsw = document.querySelector('.tc');
const submit_Btn = document.querySelector('#submit_btn');
const error_msg = document.querySelector('.error_msg');

let form_inputs = [];
let errorMsg = [];
form.addEventListener('submit', function (e) {
  const inputs = {
    first_name: firstName_input,
    last_name: lastName_input,
    email_id: email_input,
    country: country_selected,
    password: password_input,
    confirm_password: confirmPassword_input,
  };
  if (firstName_input || lastName_input) {
    errorMsg = getSignUpError(
      firstName_input.value,
      lastName_input.value,
      email_input.value,
      country_selected.value,
      password_input.value,
      confirmPassword_input.value
    );
  } else if (email_input && password_input) {
    errorMsg = getLoginError(email_input.value, password_input.value);
  } else {
    errorMsg = getResetError(email_input.value);
  }

  if (errorMsg.length > 0) {
    e.preventDefault();
    error_msg.innerText = errorMsg.join(', ');
  }
  if (errorMsg == null) {
    form_inputs.push(inputs);
    saveUsersInfo();
    firstName_input.value =
      lastName_input.value =
      email_input.value =
      country_selected.value =
      password_input.value =
      confirmPassword_input.value =
        '';
    console.log(form_inputs);
  }
  //   return errorMsg;
});

function saveUsersInfo() {
  //   const signUpData = signUpForm.forEach((input) => input.value);
  let inputs_data = JSON.stringify(form_inputs);
  localStorage.setItem('users_info', inputs_data);
}

const all_inputs_errors = [
  firstName_input,
  lastName_input,
  email_input,
  country_selected,
  password_input,
  confirmPassword_input,
].filter((input) => input !== null);
all_inputs_errors.forEach((input, index) => {
  input.addEventListener('input', function () {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
    }
  });
});

function getSignUpError(
  firstname,
  lastname,
  email,
  country,
  password,
  confirmpassword
) {
  let errors = [];
  if (firstname === '' || firstname == null) {
    errors.push('First name is required');
    indicateErr(firstName_input);
    // firstName_input.parentElement.classList.add('incorrect');
  } else if (isValidName(firstname)) {
    errors.push('Valid characters is require');
    indicateErr(firstName_input);
  }
  if (lastname === '' || lastname == null) {
    errors.push('Last name is required');
    lastName_input.parentElement.classList.add('incorrect');
  } else if (isValidName(lastname)) {
    errors.push('Valid characters is require');
    indicateErr(lastName_input);
  }
  if (email === '' || email == null) {
    errors.push('Email address is required');
    email_input.parentElement.classList.add('incorrect');
  } else if (!isEmail(email)) {
    errors.push('Valid email address is require');
    indicateErr(email_input);
  }
  if (country === '' || country == null) {
    errors.push('Country is required');
    country_selected.parentElement.classList.add('incorrect');
  }
  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  } else if (!isValidPassword(password)) {
    errors.push('Password must be 8 character long');
    indicateErr(password_input);
  }
  if (password !== confirmpassword) {
    errors.push('Password not match');
    confirmPassword_input.parentElement.classList.add('incorrect');
  }
  return errors;
}

function getLoginError(email, password) {
  let errors = [];
  if (email === '' || email == null) {
    errors.push('Email address is required');
    email_input.parentElement.classList.add('incorrect');
  } else if (!isEmail(email)) {
    errors.push('Valid email address is require');
    indicateErr(email_input);
  }
  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  } else if (!isValidPassword(password)) {
    errors.push('Password must be 8 character long');
    indicateErr(password_input);
  }
  return errors;
}

function getResetError(email) {
  let errors = [];
  if (email === '' || email == null) {
    errors.push('Email address is required');
    indicateErr(email_input);
  } else if (!isEmail(email)) {
    errors.push('Valid email address is require');
    indicateErr(email_input);
  }
  return errors;
}

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
    country_selected.insertAdjacentHTML(
      'beforeend',
      `
      <option value="${nation}" data-country="${index}">${nation}</option>
        `
    );
  });
};
createCountryList();

function indicateErr(input) {
  const formErr = input.parentElement;
  formErr.classList.add('incorrect');
}

const isValidName = (name) => {
  let regEx = /\d|\d[^0-9]|[^0-9]\d/gi;
  return name.match(regEx);
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const isValidPassword = (password) => {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};
