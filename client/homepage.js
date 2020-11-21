// 'use strict';

// window.addEventListener("load", async function () {
//   // action for signIn button
//   const signInButton = document.getElementById('signIn');
//   signInButton.addEventListener('click', async () => {
//     // get inputEmail value
//     const emailValue = document.getElementById('inputEmail').value

//     // get inputPassword value
//     const passwordValue = document.getElementById('inputPassword').value 

//     if(emailValue === '' || passwordValue === ''){
//       alert('Required sign in information is missing.');
//     }
//     else {
//       // TODO: add header (THANKS OLIVIA!!)
//       const response = await fetch('/login', {
//         method: 'POST',
//         body: JSON.stringify({
//             username: emailValue ,
//             password: passwordValue,
//         })
//       });

//       if (!response.ok) {
//         console.error("Error: ", response.status);
//       }
//       else{
//         window.location.href = '/private';
//       }

//       // Redirect (check that redirect works) -- should go to courses.html
//     }
//   });
// });



