'use strict';

console.log("register.js running");

// get inputEmail, inputPassword, and inputName
const emailValue = document.getElementById('createEmail').value; 
const passwordValue = document.getElementById('createPassword').value; 
const nameValue = document.getElementById('createName').value; 

// action for createAccount
const createAccountButton = document.getElementById('createAccount');
createAccountButton.addEventListener('click', async () => {

  if(emailValue === '' || passwordValue === '' || nameValue === ''){
    alert('Required sign in information is missing.');
  }
  else {
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({
          email: emailValue ,
          password: passwordValue,
          name: nameValue
      })
    });

    if (!response.ok) {
      console.error("Could not save the user to the server.");
    }
    else{
      console.log("user added.");
    }
    // made email the primary key so I don't think i have to check for uniqueness when adding to the table. otherwise can be handled in server.
    window.location.href = "courses.html";
  }
});




// async function () {
//   const response = await fetch("dictionary.json");
//   if (!response.ok) {
//       console.log(response.error);
//       return;
//   }

//   // We make dictionary a global.
//   window.dictionary = await response.json();



