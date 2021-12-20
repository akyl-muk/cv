//Validtion code for inputs
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email__error = document.getElementById('email__error');
let pass__error = document.getElementById('pass__error');

email.addEventListener('textInput',email_Varify);
password.addEventListener('textInput',pass_Varify);

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email__error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass__error.style.display = "block";
        password.focus();
        return false;
    }
}

function email_Varify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email__error.style.display = "none";
        return true;
    }
}
function pass_Varify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass__error.style.display = "none";
        return true;
    }
}