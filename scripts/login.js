/// Selecting elements from login.html
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const showPassword = document.getElementById('togglePswd');
const submitBtn = document.querySelector('#creatAcct');
const loginForm = document.querySelector('form');

// submitBtn.disabled = true;

// const [getData] = JSON.parse(localStorage.getItem('signUpData'));
// console.log(getData.password);
let user;

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const userMail = inputEmail.value;
  login(userMail);
});

function login(mail) {
  const psw = inputPassword.value;
  const getUsers = JSON.parse(localStorage.getItem('signUpData'));
  user = getUsers.find((user) => user.email === mail);
  console.log(user);
  //   userData.email;
  if (user?.password == psw) {
    document.querySelector('.over').classList.add('overlay');
    inputEmail.value = inputPassword.value = '';
  } else {
    alert(
      'You have enter either incorrect email, password or both. Provide correct and valid information!'
    );
    inputEmail.value = inputPassword.value = '';
    inputEmail.focus();
  }
}

//// Function to Validate the input value on Login.html
const errorMessage = (input, message) => {
  const formHandler = input.parentElement;
  small = formHandler.querySelector('small');
  formHandler.className = 'form_input error';
  small.innerText = message;
};

function successMsg(input) {
  const formHandler = input.parentElement;
  small = formHandler.querySelector('small');
  formHandler.className = 'form_input success';
}

const isEmail = (loginEmail) => {
  mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  return loginEmail.match(mailformat);
};

function isPassword(password) {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
}

const validateEmail = () => {
  //   e.preventDefault();
  const emailValue = inputEmail.value.trim();
  if (emailValue == '') {
    errorMessage(inputEmail, 'Enter your email address');
  } else if (isEmail(emailValue)) {
    errorMessage(inputEmail, 'Enter a valid email address');
  } else {
    successMsg(inputEmail);
  }
};

const validatePassword = () => {
  const pswValue = inputPassword.value.trim();
  if (pswValue == '') {
    errorMessage(inputPassword, 'Enter your password');
  } else if (!isPassword(pswValue)) {
    errorMessage(inputPassword, 'Password must have 8 character in length');
  } else {
    successMsg(inputPassword);
  }
};
let emailValidation = inputEmail.addEventListener('blur', validateEmail);
let passwordValidation = inputPassword.addEventListener(
  'blur',
  validatePassword
);

// if (emailValidation && passwordValidation) {
//   submitBtn.disabled = false;
// }

//// Toggle the checkbox to show password
showPassword.addEventListener('click', function () {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
  } else {
    inputPassword.type = 'password';
  }
});
