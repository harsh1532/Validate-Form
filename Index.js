let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    let name=document.getElementById('name').value;
    console.log(name)

    if(name.length==0){
        nameError.innerHTML='Name is reuired';
        nameError.style.color='red';

        return
    }

    if(!name.match(/[a-zA-Z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Invalid Name";
        nameError.style.color='red';

        return 
    }
    nameError.innerHTML="Valid";
    nameError.style.color='green';
    return true;

}

function validatePhone(){
    let phone=document.getElementById('phone').value;

    console.log(typeof(phone));

    if(phone.length == 0){
        phoneError.innerHTML='Phone no is required';
        phoneError.style.color='red';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML='Enter a valid Phone Number';
        phoneError.style.color='red';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML='Please enter only numbers';
        phoneError.style.color='red';
        return false;
    }
    phoneError.innerHTML='valid';
    phoneError.style.color='green';
    return true;

}
function validateEmail(){
    let email= document.getElementById('email').value;
    console.log(email)
    if (email.length==0){
        emailError.innerHTML="Email can't be empty";
        emailError.style.color='red';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML=" Email Invalid";
        emailError.style.color='red';
        return false;
    }
    emailError.innerHTML="Valid Email";
    emailError.style.color="Green"
    return true;
}
function validateMessage(){
    let msg=document.getElementById('message').value;
    console.log(msg);

    if(msg.length >=30 ||  msg.length <=5 ) {
        messageError.innerHTML = "Message length should be between 6 and 30 characters.";
        messageError.style.color = 'Red';
        return false;}

    messageError.innerHTML = "Correct! Message is within the limit.";
    messageError.style.color = 'Green';
    return true;

}

function validateForm(){
    if(!validateName() || !validateMessage() || !validatePhone() || !validateEmail()){
        submitError.style.display='block';
        submitError.innerHTML ="Please fix errors in red before submitting again.";
        setTimeout(()=>{submitError.style.display='none'},2000);
        return false
    }
}