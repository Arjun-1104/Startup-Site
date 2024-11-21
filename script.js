let signUpBtn = document.getElementById('signup-button');
let Body = document.getElementsByTagName('Body');
let signUpForm = document.querySelector(".signUp-form");
let formRegisterBtn = document.querySelector('.form-register-btn');
console.log();

signUpBtn.addEventListener('click',showForm);
// formRegisterBtn.addEventListener('click',removeForm);

function showForm(){
    signUpForm.style.removeProperty('display');
    // signUpForm.style.setProperty('display','block','important');
    
}



// function removeForm(){
//     signUpForm.style.removeProperty('display');

// }

// console.log()
