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
  // const weekDaysDiv = document.getElementById('courseDaysList').value;
  let weekdayArray = [];

  if (courseNameValue === '' || professorValue === '') {
    alert('Required sign in information is missing.');
  }
  
  // for checkbox in courseDays div, if a checkbox is checked, add its ID (the weekday) to the array
  let weekDaysCheckboxes = document.getElementsByClassName('weekday');
  for (let i = 0; i < weekDaysCheckboxes.length; i++) {
    if (weekDaysCheckboxes[i].checked === true) {
      // console.log(weekDaysCheckboxes[i].id);
      weekdayArray.push(weekDaysCheckboxes[i].id);
    }
  }
  console.log("weekdays: ", weekdayArray);  
  
  // database: insert an object with the information {email: 'unique email of user / or name?', courseName: 'course name', professor: 'professor', courseDays: [course days]}
});

<<<<<<< HEAD

=======
>>>>>>> c1f3270987641020bf0d7b11d1fb748b17962364
const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');
coursesDeleteSelection.addEventListener('load', () => {
  // creates an options tag for each course in the user's course list and adds the course to the selection for deletion
  // similarly to how courses are obtained from database table and added to the HTML courses table at the bottom of courses.html, 
  // for each course in the user's course list, add the course name to the delete drop down menu (select tag) as a new options tag
  /*
    Inside this for loop that traverses all user's courses, do :
      const newOption = document.createElement('option');
      newOption.value = "insert the course name here";
    move on to next course name
  */
});

const coursesDeleteButton = document.getElementById('coursesDelete');
coursesDeleteButton.addEventListener('click', () => {
  // go into the database, remove this course from the user's course listings
});

<<<<<<< HEAD
=======

>>>>>>> c1f3270987641020bf0d7b11d1fb748b17962364
// event listener on load that encompasses all of these other listeners

// add in a way to create a new tab or div or something to store the text/info of the new course once it's created (think about when to delete them? or if they should be in a table, not tabs)
// so get rid of the Add tab and make that a header instead. keep the rest of the gray div. make an empty table with just headers, then when a new course is added, add the course info to each
// appropriate header/column and insert the data into the database (pg-promise if we use Heroku PostgreSQL)

// TODO: FILL TABLE OF EXISTING USER COURSES
// Follow this code but call different endpoints and table data
// const wordScoresRequest = await fetch('./highestWordScores');
// const wordScoresData = wordScoresRequest.ok ? await wordScoresRequest.json() : [];

// for (const wordScore of wordScoresData) {
//     const tr = document.createElement('tr');
//     const name  = document.createElement('td');
//     const word  = document.createElement('td');
//     const score  = document.createElement('td');
//     name.innerText = wordScore.name;
//     word.innerText = wordScore.word;
//     score.innerText = wordScore.score;
//     tr.appendChild(name);
//     tr.appendChild(word);
//     tr.appendChild(score);
//     document.getElementById('word-scores-table').appendChild(tr);
// }
