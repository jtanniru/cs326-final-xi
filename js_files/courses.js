'use strict';

// action: gives each checkbox an attribute when checked so the status of each can be easily observed later
const monday = document.getElementById('monday');
monday.addEventListener('click', () => {
  if (monday.hasAttribute('checked')) {
    monday.removeAttribute('checked');
  }
});

const tuesday = document.getElementById('tuesday');
tuesday.addEventListener('click', () => {
  if (tuesady.hasAttribute('checked')) {
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
  const courseNameValue = document.getElementById('courseName');
  const professorValue = document.getElementById('professor');
  const weekDaysDiv = document.getElementById('courseDaysList');
  let weekdayArray = [];
  
  // for checkbox in courseDays div, if a checkbox is checked, add its ID (the weekday) to the array
  let weekDaysCheckboxes = weekDaysDiv.getElementsByTagName('input');
  for (let i = 0; i < weekDaysCheckboxes.length; i++) {
    if (weekDaysCheckboxes[i].hasAttribute('id')) {
      console.log(weekDaysCheckboxes[i].id);
      weekdayArray.push(weekDaysCheckboxes[i].id);
    }
  }
  console.log(weekdayArray);  
  
  // database: insert an object with the information {email: 'unique email of user / or name?', courseName: 'course name', professor: 'professor', courseDays: [course days]}
});

// event listener on load that encompasses all of these other listeners

// add in a way to create a new tab or div or something to store the text/info of the new course once it's created (think about when to delete them? or if they should be in a table, not tabs)
// so get rid of the Add tab and make that a header instead. keep the rest of the gray div. make an empty table with just headers, then when a new course is added, add the course info to each
// appropriate header/column and insert the data into the database (pg-promise if we use Heroku PostgreSQL)