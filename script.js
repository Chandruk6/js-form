const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const MobileNo = document.getElementById('MobileNo');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const gender = document.getElementById('gender');


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkvalid();
});
function checkvalid(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const MobileNoValue = MobileNo.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const gendervalue = document.form.gender.value;

    var a="chandru";
    if(usernameValue  !== a){
        setError(username,'Enter correct Login Your Name');
        username.style.borderColor='red';
        alert('Enter your Correct Name');
        return false;

    }
    else {
        setSuccess(username);
        username.style.borderColor='green';
    }
    var b="chandru12@gmail.com";
    if(emailValue !== b){
        setError(email,' Enter correct Login Your Email');
        email.style.borderColor='red'
        alert('Enter your Correct Email');
        return false;
    }
    
      else {
        setSuccess(email);
        email.style.borderColor='green';
      }
    
      var a="9585141416";
      if(MobileNoValue  !== a){
          setError(MobileNo,'Enter correct Mobile No');
          MobileNo.style.borderColor='red';
          alert('Enter correct Mobile No');
          return false;
  
      }
      else {
          setSuccess(MobileNo);
          MobileNo.style.borderColor='green';
      }
      var gender = form.querySelectorAll('input[name="gender"]:checked');
  if (!gender.length) {
    alert('please select Gender');
    return false;
  }

  var a="1214";
      if (passwordValue !==a) {
        setError(password, ' (password cannot be blank');
        password.style.borderColor='red'
        alert('Enter your password');
        return false;
      }
      else {
        setSuccess(password);
        password.style.borderColor='green'
      }
      if (password2Value === '') {
        setError(password2, ' password2 cannot be blank');
        password2.style.borderColor='red'
        alert('Enter your confirm-password');
        return false;
      }
      else if (passwordValue !== password2Value) {
        setError(password2, 'not match');
        passwordValue.style.borderColor='red';
        alert('Password not match');
        return false;
      }
      else {
        setSuccess(password2);
        password2.style.borderColor='green'
      }
     localStorage.setItem('Name',usernameValue);
     localStorage.setItem('Email',emailValue);
     localStorage.setItem('MobileNo',MobileNoValue);
     localStorage.setItem('password',passwordValue);
     localStorage.setItem('password2',password2Value);
     localStorage.setItem('gender',gendervalue);
     window.location.href="intro.html";
    }
    
    
    function setError(input, message) {
      const formControl = input.parentElement;
      formControl.className = 'form-control error';
      const small = formControl.querySelector('small');
      small.innerText = message;
    }
    function setSuccess(input) {
      formControl = input.parentElement;
      formControl.className = 'form-control success';
    

}
