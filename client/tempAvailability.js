'use strict';

const currEmail = window.localStorage.getItem('currentEmail');
console.log("Current Email from LOCAL STORAGE: ", currEmail);
renderTable(currEmail);