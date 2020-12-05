'use strict';

window.addEventListener("load", async function () {
  const createAccountButton = document.getElementById('createAccount');
  createAccountButton.addEventListener('click', async () => {
    const emailValue = document.getElementById('createEmail').value; 
    const passwordValue = document.getElementById('createPassword').value; 
    const nameValue = document.getElementById('createName').value; 

    if(emailValue === '' || passwordValue === '' || nameValue === ''){
      alert('Required information is missing.');
    }
    else {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
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
        window.location.href = '/login';
      }
    }
  });
});
