'use strict';

window.addEventListener("load", async function () {

  const response = await fetch('/course/view');
  const responseData = response.ok ? await response.json() : [];

  const userCoursesList = document.getElementById('listOfCourses');
  const userProfessorList = document.getElementById('listOfProfessors');
  const userDaysList = document.getElementById('listOfDays');
  const userTimezoneList = document.getElementById('listOfTimezones');

  for (const course of responseData) {
    // populate Courses list
    const courseCheckboxInput = document.createElement('input');
    const courseCheckboxLabel = document.createElement('label');
    courseCheckboxInput.classList.add('form-check-input');
    courseCheckboxInput.setAttribute('type', 'checkbox');
    courseCheckboxInput.setAttribute('id', course.course_name);
    courseCheckboxLabel.classList.add('form-check-label');
    courseCheckboxLabel.setAttribute('for', course.course_name);
    courseCheckboxLabel.innerHTML = course.course_name;
    userCoursesList.appendChild(courseCheckboxInput);
    userCoursesList.appendChild(courseCheckboxLabel);

    // populate Professors list
    const professorCheckboxInput = document.createElement('input');
    const professorCheckboxLabel = document.createElement('label');
    professorCheckboxInput.classList.add('form-check-input');
    professorCheckboxInput.setAttribute('type', 'checkbox');
    professorCheckboxInput.setAttribute('id', course.professor);
    professorCheckboxLabel.classList.add('form-check-label');
    professorCheckboxLabel.setAttribute('for', course.professor);
    professorCheckboxLabel.innerHTML = course.professor;
    userProfessorList.appendChild(professorCheckboxInput);
    userProfessorList.appendChild(professorCheckboxLabel);
  }

});
