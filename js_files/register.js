'use strict';

console.log("register.js running");

// action for createAccount
const createAccountButton = document.getElementById('createAccount');
createAccountButton.addEventListener('click', () => {

  // get inputEmail, inputPassword, and inputName
  const emailValue = document.getElementById('createEmail').value; 
  const passwordValue = document.getElementById('createPassword').value; 
  const nameValue = document.getElementById('createName').value; 
  console.log(emailValue);
  console.log(passwordValue);
  console.log(nameValue);

  if(emailValue === '' || passwordValue === '' || nameValue === ''){
    alert('Requried sign in information is missing.');
  }

  else {
    /*
      look through the login table stored with either PostgreSQL or MongoDB
      1)  for (all entries of the loginTable){
            if (loginTable[email] === emailValue) {
              // then this email already exists
              alert('This email is already registered.');
            }
            else {
              // this email is not registered yet and still able to be added to loginTable
              // INSERT into database this information (not necessarily in this format): {email: 'email', password: 'password', name: 'name'}
            }
          }
    */
    window.location.href = "courses.html";
  }
}); 