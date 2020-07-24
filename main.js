const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the page from being refreshed

    checkInputFields();
});

function checkInputFields() {
    //get the values from the user

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
        //show error message
        setErrorFor(username, "Name cannot be blank");
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === "") {
        //show error message
        setErrorFor(email, "Email cannot be blank");
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, "Please enter a valid email address");
    } else {
        //add success class
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        //show error message
        setErrorFor(password, "Password cannot be blank");
    } else if (passwordValue.length < 8) {
        setErrorFor(password, "Password should be at least 8 characters");
    } else {
        //add success class
        setSuccessFor(password);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-group div
    const errorMessage = formControl.querySelector('small');

    //add error message
    errorMessage.innerText = message;

    //add error class
    formControl.className = 'form-group error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //form-group div
   
    //add success class
    formControl.className = 'form-group success';
}

function validateEmail(email) {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email);
}