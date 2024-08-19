const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const dob=document.getElementById('date');



form.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();
    
});


const isValidEmail = (email) => {
   const  re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const isAtLeast18YearsOld = (dobValue) => {
    const dob = new Date(dobValue);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();


    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age >= 18;
};


const setSuccess = (element) =>{
    const inputcontrol=element.parentElement;
    const errordisplay=inputcontrol.querySelector('.error');

    errordisplay.innerText='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const setError = (element,message) =>{
    const inputcontrol=element.parentElement;
    const errordisplay=inputcontrol.querySelector('.error');

    errordisplay.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}


const validateInputs = () =>
{
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const dobvalue=dob.value.trim();


    if(usernamevalue === '')
    {
        setError(username,'Username cannot be empty');
    }
    else
    {
        setSuccess(username);
    }



    if(emailvalue === '')
    {
        setError(email,'Email cannot be empty');
    }
    else if(!isValidEmail(emailvalue))
    {
        setError(email,'Email is not valid');
    }
    else
    {
        setSuccess(email);
    }


    if (dobvalue === '') {
        setError(dob, 'Date of Birth cannot be empty');
    } else if (!isAtLeast18YearsOld(dobvalue)) {
        setError(dob, 'You must be at least 18 years old');
    } else {
        setSuccess(dob);
    }
    


}


  