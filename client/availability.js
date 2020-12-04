'use strict';
async function renderTable(searchEmail) {

  //let restoredData = JSON.parse(window.localStorage.getItem("saveData"));
  let curAvailability = [];
  let table = document.getElementById('availabilityTable');
  console.log(table);
  // if (restoredData.length !== 0) {
  //   if (restoredData[0].emailAddress !== null) {
      //let curEmail = restoredData[0].emailAddress;
      console.log("searchEmail:");
      console.log(searchEmail);
      const response = await fetch('/availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          //email: curEmail
          email: searchEmail
        })
      });
      if (!response.ok) {
        console.error("Could not fetch availability.");
      }

      
      
      const searchData = response.ok ? await response.json() : [];
      curAvailability = searchData[0].availability;
      //console.log(searchData.availability);
      console.log("curAvailability:")
      console.log(curAvailability);
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
  // } else {
  //   curAvailability = [
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  //     [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  //   ];
  // }
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 24; j++) {
      if (curAvailability[i][j] === true) {
        table.rows[j + 1].cells[i + 1].className = "cell";
      }
    }
  }
}

