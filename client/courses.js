'use strict';

window.addEventListener("load", async function () {
  // action: gives each checkbox an attribute when checked so the status of each can be easily observed later
  const monday = document.getElementById('monday');
  monday.addEventListener('click', () => {
    if (monday.hasAttribute('checked')) {
      monday.removeAttribute('checked');
    }
  });

  const tuesday = document.getElementById('tuesday');
  tuesday.addEventListener('click', () => {
    if (tuesday.hasAttribute('checked')) {
      tuesday.removeAttribute('checked');
    }
  });

  const wednesday = document.getElementById('wednesday');
  wednesday.addEventListener('click', () => {
    if (wednesday.hasAttribute('checked')) {
      wednesday.removeAttribute('checked');
    }
  });

  const thursday = document.getElementById('thursday');
  thursday.addEventListener('click', () => {
    if (thursday.hasAttribute('checked')) {
      thursday.removeAttribute('checked');
    }
  });

  const friday = document.getElementById('friday');
  friday.addEventListener('click', () => {
    if (friday.hasAttribute('checked')) {
      friday.removeAttribute('checked');
    }
  });

  const saturday = document.getElementById('saturday');
  saturday.addEventListener('click', () => {
    if (saturday.hasAttribute('checked')) {
      saturday.removeAttribute('checked');
    }
  });

  const sunday = document.getElementById('sunday');
  sunday.addEventListener('click', () => {
    if (sunday.hasAttribute('checked')) {
      sunday.removeAttribute('checked');
    }
  });

  // action for submit course button
  const coursesSubmitButton = document.getElementById('coursesSubmit');
  coursesSubmitButton.addEventListener('click', () => {
    console.log("clicked button");
    const courseNameValue = document.getElementById('inputCourseName').value;
    const professorValue = document.getElementById('inputProfessor').value;
    
    let weekdayArray = []; // the Boolean[] added to the sql table for course days column

    if (courseNameValue === '' || professorValue === '') {
      alert('Required sign in information is missing.');
    }
    
    // for checkbox in courseDays div, if a checkbox is checked, add its ID (the weekday) to the array
    let weekDaysCheckboxes = document.getElementsByClassName('weekday');
    for (let i = 0; i < weekDaysCheckboxes.length; i++) {
      if (weekDaysCheckboxes[i].checked === true) {
        weekdayArray.push(true);
      }
      else {
        weekdayArray.push(false);
      }
    }
    
    // TODO: add header
    // POST to courseInfo table
    const response = await fetch('/course/new', {
      method: 'POST',
      body: JSON.stringify({
          course_name: courseNameValue,
          professor:professorValue,
          course_days: weekdayArray // TODO: make sure to include the comma , when you add email in
          //email: // TODO: request.user 
      })
    });

    if (!response.ok) {
      console.error("Could not save the turn score to the server.");
    }

  });

  const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');
  coursesDeleteSelection.addEventListener('load', () => {
    // Views courses for user, fills out delete options and current courses table
    const response = await fetch('/course/view');
    const responseData = response.ok ? await response.json() : [];

    for (const course of responseData) {
      const newOption = document.createElement('option');
      newOption.value = course.course_name;
      coursesDeleteSelection.appendChild(newOption);

      const tr = document.createElement('tr');
      const name  = document.createElement('td');
      const professor  = document.createElement('td');
      const days  = document.createElement('td');
      name.innerText = course.course_name;
      professor.innerText = course.professor;
      days.innerHTML = course.course_days;

      tr.appendChild(name);
      tr.appendChild(professor);
      tr.appendChild(days);

      document.getElementById('coursesTable').appendChild(tr);
    }
  });

  const courseToDelete = document.getElementById('coursesDeleteSelection').value;
  const coursesDeleteButton = document.getElementById('coursesDelete');
  coursesDeleteButton.addEventListener('click', () => {

    // remove row from HTML table and delete selector options
    const response = await fetch('/course/view');
    const responseData = response.ok ? await response.json() : [];

    let index = 0;
    for (const course of responseData){
      if (course.course_name === courseToDelete) {
        document.getElementById("coursesTable").deleteRow(index);
        const deleteOption = document.getElementById("coursesDeleteSelection");
        deleteOption.remove(deleteOption.selectedIndex);
        break;
      }
      index++;
    }

    // go into the database, remove this course from the user's course listings
    const response = await fetch('/course/delete', {
      method: 'POST',
      body: JSON.stringify({
          course_name: courseNameValue,
          professor:professorValue,
          course_days: weekdayArray // TODO: make sure to include the comma , when you add email in
          //email: // TODO: request.user 
      })
    });

    if (!response.ok) {
      console.error("Could not save the turn score to the server.");
    }
  });
});
