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
    courseCheckboxInput.classList.add('form-check-input', 'courseCheckbox');
    courseCheckboxInput.setAttribute('type', 'checkbox');
    courseCheckboxInput.setAttribute('id', course.course_name);
    courseCheckboxLabel.classList.add('form-check-label');
    courseCheckboxLabel.setAttribute('for', course.course_name);
    courseCheckboxLabel.innerHTML = course.course_name;
    userCoursesList.appendChild(courseCheckboxInput);
    userCoursesList.appendChild(courseCheckboxLabel);
    userCoursesList.appendChild(document.createElement('br'));

    // populate Professors list
    const professorCheckboxInput = document.createElement('input');
    const professorCheckboxLabel = document.createElement('label');
    professorCheckboxInput.classList.add('form-check-input', 'professorCheckbox');
    professorCheckboxInput.setAttribute('type', 'checkbox');
    professorCheckboxInput.setAttribute('id', course.professor);
    professorCheckboxLabel.classList.add('form-check-label');
    professorCheckboxLabel.setAttribute('for', course.professor);
    professorCheckboxLabel.innerHTML = course.professor;
    userProfessorList.appendChild(professorCheckboxInput);
    userProfessorList.appendChild(professorCheckboxLabel);
    userProfessorList.appendChild(document.createElement('br'));
  }

  // apply event listener for adding "checked" attribute to all the filter checkboxes
  const coursesClass = document.getElementsByClassName('courseCheckbox');
  const professorsClass = document.getElementsByClassName('professorCheckbox');
  const daysClass = document.getElementsByClassName('weekday');
  const timezonesClass = document.getElementsByClassName('timezone');

  for (const course in coursesClass) {
    if (typeof(course) === 'object') {
      course.addEventListener('click', () => {
        if (course.hasAttribute('checked')) {
          course.removeAttribute('checked');
        }
        else {
          course.setAttribute('checked', '');
        }
      });
    }
  }

  for (const professor in professorsClass) {
    if (typeof(professor) === 'object') {
      professor.addEventListener('click', () => {
        if (professor.hasAttribute('checked')) {
          professor.removeAttribute('checked');
        }
        else {
          professor.setAttribute('checked', '');
        }
      });
    }
  }

  for (const day in daysClass) {
    if (typeof(day) === 'object') {
      day.addEventListener('click', () => {
        if (day.hasAttribute('checked')) {
          day.removeAttribute('checked');
        }
        else {
          day.setAttribute('checked', '');
        }
      });
    }
  }

  for (const timezone in timezonesClass) {
    if (typeof(timezone) === 'object') {
      timezone.addEventListener('click', () => {
        if (timezone.hasAttribute('checked')) {
          timezone.removeAttribute('checked');
        }
        else {
          timezone.setAttribute('checked', '');
        }
      });
    }
  }

  const applyFilterButton = document.getElementById('filterApply');
  applyFilterButton.addEventListener('click', async () => {

    let courseData = [];
    let professorData = [];
    let dayData = [];
    let timezoneData = [];

    // we know: the courses that are checked off
    for (const course in coursesClass) {
      if (course.hasAttribute('checked')) {
        courseData.push(course.id);
      }      
    }

    for (const professor in professorsClass) {
      if (professor.hasAttribute('checked')) {
        professorData.push(professor.id);
      }
    }

    for (const day in daysClass) {
      if (day.hasAttribute('checked')) {
        dayData.push(day.id);
      }
    }

    for (const timezone in timezonesClass) {
      if (timezone.hasAttribute('checked')) {
        timezoneData.push(timezone.id);
      }
    }

    // TODO: add header
    // POST to courseInfo table
    const response = await fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          course_name_list: courseData, // courseData is courseData[] of sql table courseInfo course_name values
          professor_list: professorData,  // professorData is professorData[] of sql table courseInfo professor values
          course_days_list: dayData,  // dayData is dayData[] of sql table courseInfo course_days values
          timezone_list: timezoneData // timezoneData is timezoneData[] of sql table userInfo timezone values
      })
    });

    if (!response.ok) {
      console.error("Could not save the turn score to the server.");  // TODO: go through and redo the console.error strings
    }

    const searchResponse = await fetch('/search');
    const searchData = searchResponse.ok ? await searchResponse.json() : [];

    // populate the table of matching users
    const tableBody = document.getElementById('matches');
    // for object (containing name, email, phone) in the response
    for (const thing in searchData) {
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
      availCell.appendChild(availability);
      availability.addEventListener('click', () => {
        window.searchEmail = searchEmail;
        window.location.href = 'availability.html';
      });

      emailCell.innerHTML = searchEmail;
      nameCell.innerHTML = searchName;
      phoneCell.innerHTML = searchPhone;
      tableRow.appendChild(emailCell);
      tableRow.appendChild(nameCell);
      tableRow.appendChild(phoneCell);

      tableBody.appendChild(tableRow);
    }

  });

});
