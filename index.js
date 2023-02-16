const upBtn = document.getElementById('fixedButton');
const nameInput = document.getElementById('Name')
const emailInput = document.getElementById('Email')
const mobileInput = document.getElementById('Mobile')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const numberError = document.getElementById('numberError')
const button = document.getElementById('submitBtn')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 130){
        upBtn.classList.add('fixedBtn')
    }else{
        upBtn.classList.remove('fixedBtn')
    }
})

nameInput.addEventListener('blur', (event) => {
    if (event.target.value === ''){
        nameError.textContent = 'Required*'
    }else{
        nameError.textContent = ''
    }
})

emailInput.addEventListener('blur', (event) => {
    if (event.target.value === ''){
        emailError.textContent = 'Required*'
    }else{
        emailError.textContent = ''
    }
})

mobileInput.addEventListener('blur', (event) => {
    if (event.target.value === ''){
        numberError.textContent = 'Required*'
    }else{
        numberError.textContent = ''
    }
})

submitData = () => {
    if (nameInput.value === ''){
        nameError.textContent = 'Required*'
    }else{
        nameError.textContent = ''
    }

    if (emailInput.value === ''){
        emailError.textContent = 'Required*'
    }else{
        emailError.textContent = ''
    }

    if (mobileInput.value === ''){
        numberError.textContent = 'Required*'
    }else{
        numberError.textContent = ''
    }
}


button.addEventListener('submit', (event) =>{
    event.preventDefault();
    submitData();
})