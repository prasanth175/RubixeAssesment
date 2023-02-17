const upBtn = document.getElementById('fixedButton');
const nameInput = document.getElementById('Name')
const emailInput = document.getElementById('Email')
const mobileInput = document.getElementById('Mobile')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const numberError = document.getElementById('numberError')
const button = document.getElementById('submitBtn')
const genderMale = document.getElementById('genderMale')
const genderFemale = document.getElementById('genderFemale')
const box = document.getElementById("message-box");

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 130){
        upBtn.classList.add('fixedBtn')
    }else{
        upBtn.classList.remove('fixedBtn')
    }
})

let checkValidation = true

const RegisterDetails = {
    name: '',
    email: '',
    mobile: '',
    gender: 'Male'
}

nameInput.addEventListener('blur', (event) => {
    if (event.target.value === ''){
        nameError.textContent = 'Required*'
    }else{
        if (event.target.value.length < 2){
            nameError.textContent = 'name must at least two numbers long*'
        }else{
            nameError.textContent = ''
        }
    }

    RegisterDetails.name = event.target.value
})

emailInput.addEventListener('blur', (event) => {
    if (event.target.value === ''){
        emailError.textContent = 'Required*'
    }else{
        if(!emailInput.value.includes('@gmail.com')){
            emailError.textContent = 'Invalid Email'
        }else{
            emailError.textContent = ''
        }
    }

    RegisterDetails.email = event.target.value
})

mobileInput.addEventListener('blur', (event) => {
    if (event.target.value === ''){
        numberError.textContent = 'Required*'
    }else{
        if (event.target.value.length < 10){
            numberError.textContent = 'Must contain at least 10 numbers*'
        }else{
            numberError.textContent = ''
        }
    }

    RegisterDetails.mobile = event.target.value
})

genderMale.addEventListener("change", function(event) {
    RegisterDetails.gender = event.target.value
  });
  
  genderFemale.addEventListener("change", function(event) {
    RegisterDetails.gender = event.target.value
  });


validateForm = () => {
    if (nameInput.value === ''){
        nameError.textContent = 'Required*'
    }else{
        nameError.textContent = ''
    }

    if (emailInput.value === ''){
        emailError.textContent = 'Required*'
    }else{
        if(!emailInput.value.includes('@gmail.com')){
            emailError.textContent = 'Invalid Email'
        }else{
            emailError.textContent = ''
        }
    }

    if (mobileInput.value === ''){
        numberError.textContent = 'Required*'
    }else{
        if (mobileInput.value.length < 10){
            numberError.textContent = 'Must contain 10 numbers*'
        }else{
            numberError.textContent = ''
        }
    }
}

function submitFormData(RegisterDetails) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(RegisterDetails)
    };

  
    let url = "https://backendrubixe-production.up.railway.app/register/";
  
    fetch(url, options)
      .then(function(response) {
        return response.status;
      })
      .then(function(status) {
        if (status === 400) {
            emailError.textContent = "Email Already Exists";
        }else{
            alert('Registered Successfully')
            nameInput.value = ''
            emailInput.value = ''
            mobileInput.value = ''
        }
      });
  }


button.addEventListener('submit', (event) =>{
    event.preventDefault();
    validateForm();
    submitFormData(RegisterDetails)
})

