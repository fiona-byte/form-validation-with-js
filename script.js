const form = document.getElementById("form");
const username = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

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
    } else {
        //add success class
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        //show error message
        setErrorFor(password, "Password cannot be blank");
    } else if (passwordValue.length < 8) {
        setErrorFor(password, "password should be at least 8 characters");
    } else {
        //add success class
        setSuccessFor(password);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control div
    const errorMessage = formControl.querySelector('small');

    //add error message
    errorMessage.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //form-control div
   
    //add success class
    formControl.className = 'form-control success';
}

// function emailCheck (email) {

// }