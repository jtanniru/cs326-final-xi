'use strict';


function deleteTable() {
  const temp = document.getElementById("coursesTable").getElementsByTagName("tr");
  for(const i in temp) {
    document.getElementById("coursesTable").deleteRow(0);
  }
}


window.addEventListener("load", async function () {
  // action: gives each checkbox an attribute when checked so the status of each can be easily observed later
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

  // action for submit course button
  const coursesSubmitButton = document.getElementById('coursesSubmit');
  coursesSubmitButton.addEventListener('click', async () => {
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
    
    // POST to courseInfo table
    const courseResponse = await fetch('/course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
      body: JSON.stringify({
          course_name: courseNameValue,
          professor: professorValue,
          course_days: weekdayArray 
      })
    });

    if (!courseResponse.ok) {
      console.error("response failed.");
      console.log("course not added.")
    }
    else{
      console.log("course added");
    }

    const responseView = await fetch('/course/view');
    const responseData = responseView.ok ? await responseView.json() : [];
    const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');

    for (const course of responseData) {
      
      const newOption = document.createElement('option');
      newOption.innerHTML = course.course_name; // updated from newOption.value
      newOption.classList.add("text-dark", "bg-light");
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

  //render function for course table onload

  const courseToDelete = document.getElementById('coursesDeleteSelection').value;
  const coursesDeleteButton = document.getElementById('coursesDelete');
  coursesDeleteButton.addEventListener('click', async () => {

    // remove row from HTML table and delete selector options
    const responseDelete = await fetch('/course/view');
    const response = responseDelete.ok ? await responseDelete.json() : [];

    let index = 0;
    for (const course of response){
      if (course.course_name === courseToDelete) {
        document.getElementById("coursesTable").deleteRow(index);
        const deleteOption = document.getElementById("coursesDeleteSelection");
        deleteOption.remove(deleteOption.selectedIndex);
        break;
      }
      index++;
    }

    const courseNameValue = document.getElementById('inputCourseName').value;
    // go into the database, remove this course from the user's course listings
    const responseDelCourse = await fetch('/course/'+ courseNameValue, {
      method: 'DELETE'
    });

    if (!responseDelCourse.ok) {
      console.error("Error");
    }
    else{
      console.log("course delete");
    }

    deleteTable();

    const responseRender = await fetch('/course/view');
    const responseDataRender = responseRender.ok ? await responseRender.json() : [];

    for (const course of responseDataRender) {
      // const newOption = document.createElement('option');
      // newOption.value = course.course_name;
      // coursesDeleteSelection.appendChild(newOption);

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
});

//prevent things from added to the table when submit button is clicked and there is no onfo in input.
//render table and delete drop down on load

