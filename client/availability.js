'use strict';

function settingEmail(searchEmail) {
  window.localStorage.setItem('currentEmail', searchEmail);
  window.open('availability.html');
}

async function renderTable(searchEmail) {
  let curAvailability = [];
  let table = document.getElementById('availabilityTable');

  const response = await fetch('/availability', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email: searchEmail
    })
  });

  if (!response.ok) {
    console.error("Could not fetch availability.");
  }
      
  const searchData = response.ok ? await response.json() : [];
  curAvailability = searchData[0].availability;
  
  if(curAvailability === null){
    curAvailability = [
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    ];
  }

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 24; j++) {
      if (curAvailability[i][j] === true) {
        table.rows[j + 1].cells[i + 1].className = "cell";
      }
    }
  }
}
