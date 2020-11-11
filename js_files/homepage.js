'use strict';
console.log("homepage.js running");

// action for signIn button
const signInButton = document.getElementById('signIn');
signInButton.addEventListener('click', () => {
  // get inputEmail value
  const emailValue = document.getElementById('inputEmail').value;

  // get inputPassword value
  const passwordValue = document.getElementById('inputPassword').value; 

  if(emailValue === '' || passwordValue === ''){
    alert('Required sign in information is missing.');
  }

  else {
  /*
    look through the login table stored with either PostgreSQL or MongoDB
    1)  if the email does not match anything in loginTable[email] (assuming we store it like {email: "email", password: "password", name: "name"}),
        OR if the password does not match anything in loginTable[password] (assuming we store it as above),
        OR if the email is found in loginTable[email] (there will only be one instance of each email) and the password does not match inputPassword,
          - then return an alert('Either email or password is invalid.');
    2)  Do not have to check the case that a password is correct but the email is wrong because if the email is in loginTable but this password
        does not belong to it, an alert will be sent out. If the password is correct for a user and the email entered is not in loginTable, 
        an alert will be sent out since the email was not found. If the password is wrong and the email is in loginTable, an alert will be
        sent out since email/password do not match. If the password is wrong and the email is not in the loginTable, an alert will be sent out
        since the email was not found in the loginTable.
    3)  if the email exists in the loginTable and the password matches --> valid sign in!
          - then link to courses.html
  */
    window.location.href = "courses.html";
  }
});

/*homepage.js will only contain get statements from the sql tables */

