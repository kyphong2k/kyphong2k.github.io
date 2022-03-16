
// login form
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailError = document.querySelector('#email__error');
var passwordError = document.querySelector('#password__error');
// function

function validate() {
    if(email.value.length < 9 || !email.value.includes('@uef.edu.vn') ){
        emailError.style.display ='block'
        email.style.border ='1px solid red'
        email.focus();
        return false;
    }

    if(password.value.length < 8) {
        passwordError.style.display = 'block';
        password.style.border ='1px solid red';
        password.focus();
        return false;
    }
}



var registerEmail = document.forms['register-form']['register-email'];
var registerPassword = document.forms['register-form']['register-password'];
var checkPassword = document.forms['register-form']['check-password'];

var emailError1 = document.querySelector('#email__error-1');
var passwordError1 = document.querySelector('#password__error-1');
var passwordError2 = document.querySelector('#password__error-2');



//  not working
// registerEmail.addEventListener('textInput', emailVerify);
// // registerPassword.addEventListener('textInput', passwordVerify);
// // checkPassword.addEventListener('textInput',checkPasswordVerify);




function checkRegister() {
    if(registerEmail.value.length < 9 && !registerEmail.value.includes('@uef.edu.vn') ){
        emailError1.style.display ='block'
        registerEmail.style.border ='1px solid red'
        registerEmail.focus();
        return false;
    }
    if(registerPassword.value.length < 8) {
        passwordError1.style.display = 'block';
        registerPassword.style.border ='1px solid red';
        registerPassword.focus();
        return false;
    }
    if(checkPassword.value !== registerPassword.value) {
        passwordError2.style.display = 'block';
        checkPassword.style.border ='1px solid red';
        checkPassword.focus();
        return false;
    }

}


// maintenance
// function emailVerify() {
//     if (registerEmail.value.length > 8 && email.value.includes('@uef.edu.vn')) {
//         emailError1.style.display = 'none'
//         registerEmail.style.border = '1px solid silver'
//         return true;
//     }
// }

