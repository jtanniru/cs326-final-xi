'use strict';

window.addEventListener("load", async function () {

// populate Courses list
const response = await fetch('/course/view');
const responseData = response.ok ? await response.json() : [];

for (const course of responseData) {
  // add a new checkbox for each course name
  const newCheckbox = document.createElement('')
}

// populate Professors list
  
});

// action: access checkboxes for each of the filter categories


// for Professors
const userProfessorList = document.getElementById('listOfProfessors');

// for Course Days
const userDaysList = document.getElementById('listOfDays');

// for Timezones
const userTimezoneList = document.getElementById('listOfTimezones');

// all GET requests, no POSTS
// once you do GET requests for each section, you can do SQL command to SELECT from table(s)
