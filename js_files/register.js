'use strict';

// get inputEmail, inputPassword, and inputName
const emailValue = document.getElementById('createEmail').value; //or is it innerHTML?
const passwordValue = document.getElementById('createPassword').value; // or is it innerHTML?
const nameValue = document.getElementById('createName').value; // or is it innerHTML?

// action for createAccount
const createAccountButton = document.getElementById('createAccount');
createAccountButton.addEventListener('click', () => {
  if(emailValue === '' || passwordValue === '' || nameValue === ''){
    alert('Requried sign in information is missing.');
  }
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
}); 