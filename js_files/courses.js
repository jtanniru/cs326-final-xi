'use strict';

// get professor input, course name input
const professorValue = document.getElementById('inputProfessor');
const courseNameValue = document.getElementById('inputCourseName');

// get div that contains list of checkboxes for course days input
/*
  for each checkbox Monday - Sunday, if the box is checked, then the course occurs on this day
  the course days data can be saved like this {days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'etc.']}
  that way, when days need to be compared, we can use array.includes('certain day')
*/

// action for create course button
const createCourseButton = document.getElementById('coursesSubmit');
createCourseButton.addEventListener('click', () => {
  /*
    if any of the inputs are empty, alert('Requried sign in information is missing.');

    otherwise, create an object of the form described below and insert it to a courses table (?)
  */
});

// createCourseButton should create an object in the form of {courseSubject: 'course subject', courseProfessor: 'professor last name', courseName: 'course name like CICS305', courseDays: ['days']}
