'use strict';

window.addEventListener("load", async function () {
  const monday = document.getElementById('monday');
  monday.addEventListener('click', () => {
    if (monday.hasAttribute('checked')) {
      monday.removeAttribute('checked');
    }
    else {
      monday.setAttribute('checked', '');
    }
  });

  const tuesday = document.getElementById('tuesday');
  tuesday.addEventListener('click', () => {
    if (tuesday.hasAttribute('checked')) {
      tuesday.removeAttribute('checked');
    }
    else {
      tuesday.setAttribute('checked', '');
    }
  });

  const wednesday = document.getElementById('wednesday');
  wednesday.addEventListener('click', () => {
    if (wednesday.hasAttribute('checked')) {
      wednesday.removeAttribute('checked');
    }
    else {
      wednesday.setAttribute('checked', '');
    }
  });

  const thursday = document.getElementById('thursday');
  thursday.addEventListener('click', () => {
    if (thursday.hasAttribute('checked')) {
      thursday.removeAttribute('checked');
    }
    else {
      thursday.setAttribute('checked', '');
    }
  });

  const friday = document.getElementById('friday');
  friday.addEventListener('click', () => {
    if (friday.hasAttribute('checked')) {
      friday.removeAttribute('checked');
    }
    else {
      friday.setAttribute('checked', '');
    }
  });

  const saturday = document.getElementById('saturday');
  saturday.addEventListener('click', () => {
    if (saturday.hasAttribute('checked')) {
      saturday.removeAttribute('checked');
    }
    else {
      saturday.setAttribute('checked', '');
    }
  });

  const sunday = document.getElementById('sunday');
  sunday.addEventListener('click', () => {
    if (sunday.hasAttribute('checked')) {
      sunday.removeAttribute('checked');
    }
    else {
      sunday.setAttribute('checked', '');
    }
  });

  const response = await fetch('/course/view');
  const responseData = response.ok ? await response.json() : [];

  const userCourseSelector = document.getElementById('courseSelector');
  const userProfessorSelector = document.getElementById('professorSelector');
  const userTimezoneSelector = document.getElementById('timezoneSelector');

  const listOfTimezones = ['Honolulu Standard Time (HST)', 'Alaska Daylight Time (AKDT)', 'Pacific Daylight Time (PDT)', 
                          'Mountain Daylight Time (MDT)', 'Central Daylight Time (CDT)', 'Eastern Daylight Time (EDT)'];
  for (const time in listOfTimezones){
    const timezoneOption = document.createElement('option');
    timezoneOption.innerHTML = listOfTimezones[time]; 
    timezoneOption.classList.add("text-dark", "bg-light");
    userTimezoneSelector.appendChild(timezoneOption);
  }

  for (const course of responseData) {
    const courseOption = document.createElement('option');
    courseOption.innerHTML = course.course_name;
    courseOption.classList.add("text-dark", "bg-light");
    userCourseSelector.appendChild(courseOption);

    const professorOption = document.createElement('option');
    professorOption.innerHTML = course.professor; 
    professorOption.classList.add("text-dark", "bg-light");
    userProfessorSelector.appendChild(professorOption);
  } 

  function deleteMatches() {
    const temp = document.getElementById('matches')
    temp.remove();
    const newBody = document.createElement('tbody');
    newBody.setAttribute('id', 'matches');
    const currentTable = document.getElementById('tableOfMatches');
    currentTable.appendChild(newBody);
  }

  const applyFilterButton = document.getElementById('filterApply');
  applyFilterButton.addEventListener('click', async () => {
    deleteMatches();

    const chosenCourse = document.getElementById('courseSelector').value;
    const chosenProfessor = document.getElementById('professorSelector').value;
    const chosenTimezone = document.getElementById('timezoneSelector').value;

    let weekdayArray = [];
    let weekDaysCheckboxes = document.getElementsByClassName('weekday');
    for (let i = 0; i < weekDaysCheckboxes.length; i++) {
      if (weekDaysCheckboxes[i].checked === true) {
        weekdayArray.push(true);
      }
      else {
        weekdayArray.push(false);
      }
    }
  
    const response = await fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          course_name: chosenCourse, 
          professor: chosenProfessor,  
          course_days: weekdayArray,  
          timezone: chosenTimezone
      })
    });

    if (!response.ok) {
      console.error("Could not save the turn score to the server.");  
    }

    const searchData = response.ok ? await response.json() : [];
    const tableBody = document.getElementById('matches');

    for (const thing of searchData) {
      const tableRow = document.createElement('tr');
      const emailCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const phoneCell = document.createElement('td');
      const availCell = document.createElement('td');

      const searchEmail = thing.email;
      const searchName = thing.name;
      const searchPhone = thing.phone;
      const availability = document.createElement('button');
      
      availability.innerHTML = "View Availability";
      availability.addEventListener('click', () => {
        settingEmail(searchEmail);  
      });

      availCell.appendChild(availability);

      emailCell.innerHTML = searchEmail;
      nameCell.innerHTML = searchName;
      phoneCell.innerHTML = searchPhone;
      tableRow.appendChild(emailCell);
      tableRow.appendChild(nameCell);
      tableRow.appendChild(phoneCell);
      tableRow.appendChild(availCell);

      tableBody.appendChild(tableRow);
    }
   });
});