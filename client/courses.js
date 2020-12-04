'use strict';

function deleteTable() {
  const temp = document.getElementById("coursesTableBody");
  temp.remove();
  const newBody = document.createElement('tbody');
  newBody.setAttribute('id', 'coursesTableBody');
  const currentTable = document.getElementById('coursesTable');
  currentTable.appendChild(newBody);
}

function deleteSelector() {
  const temp = document.getElementById('coursesDeleteSelection');
  temp.remove();
  const newSelector = document.createElement('select');
  newSelector.setAttribute('id', 'coursesDeleteSelection');
  const currentSelectHolderDiv = document.getElementById('selectHolder');
  currentSelectHolderDiv.appendChild(newSelector);
}

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

  deleteSelector();
  deleteTable();

  const responseOriginView = await fetch('/course/view');
  const responseOriginData = responseOriginView.ok ? await responseOriginView.json() : [];
  const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');

  for (const course of responseOriginData) {  
    const newOption = document.createElement('option');
    newOption.innerHTML = course.course_name;
    newOption.classList.add("text-dark", "bg-light");
    coursesDeleteSelection.appendChild(newOption);

    const tr = document.createElement('tr');
    const name  = document.createElement('td');
    const professor  = document.createElement('td');
    const days  = document.createElement('td');
    name.innerText = course.course_name;
    professor.innerText = course.professor;
    
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let str = '';
    for(let i = 0; i < course.course_days.length; i++){
      if(course.course_days[i]){
          str += '  ' + weekdays[i];
      }
    }
    days.innerHTML = str;

    tr.appendChild(name);
    tr.appendChild(professor);
    tr.appendChild(days);

    document.getElementById('coursesTableBody').appendChild(tr);
  }

});

const coursesSubmitButton = document.getElementById('coursesSubmit');
coursesSubmitButton.addEventListener('click', async () => {
  console.log("clicked button");
  const courseNameValue = document.getElementById('inputCourseName').value;
  const professorValue = document.getElementById('inputProfessor').value;
  
  let weekdayArray = []; // the Boolean[] added to the sql table for course days column

  if (courseNameValue === '' || professorValue === '') {
    alert('Required course information is missing.');
  }
  else{
    let weekDaysCheckboxes = document.getElementsByClassName('weekday');
    for (let i = 0; i < weekDaysCheckboxes.length; i++) {
      if (weekDaysCheckboxes[i].checked === true) {
        weekdayArray.push(true);
      }
      else {
        weekdayArray.push(false);
      }
    }
    
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

    deleteSelector();
    deleteTable();

    const responseView = await fetch('/course/view');
    const responseData = responseView.ok ? await responseView.json() : [];
    const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');

    for (const course of responseData) {
      const newOption = document.createElement('option');
      newOption.innerHTML = course.course_name; 
      newOption.classList.add("text-dark", "bg-light");
      coursesDeleteSelection.appendChild(newOption);

      const tr = document.createElement('tr');
      const name  = document.createElement('td');
      const professor  = document.createElement('td');
      const days  = document.createElement('td');
      name.innerText = course.course_name;
      professor.innerText = course.professor;
      
      const weekdays1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      let str1 = '';
      for(let i = 0; i < course.course_days.length; i++){
        if(course.course_days[i]){
          
          str1 += '  ' + weekdays1[i];
        }
      }
      days.innerHTML = str1;

      tr.appendChild(name);
      tr.appendChild(professor);
      tr.appendChild(days);

      document.getElementById('coursesTableBody').appendChild(tr);
    }
  }
});

const coursesDeleteButton = document.getElementById('coursesDelete');
coursesDeleteButton.addEventListener('click', async () => {
  const courseToDelete = document.getElementById('coursesDeleteSelection').value;
  const responseDelete = await fetch('/course/view');
  const response = responseDelete.ok ? await responseDelete.json() : [];

  let index = 0;
  for (const course of response){
    if (course.course_name === courseToDelete) {
      document.getElementById("coursesTableBody").deleteRow(index);
      const deleteOption = document.getElementById("coursesDeleteSelection");
      console.log("selected index: ", deleteOption.selectedIndex);
      deleteOption.remove(deleteOption.selectedIndex);
      
      break;
    }
    index++;
  }

  const responseDelCourse = await fetch('/course/'+ courseToDelete, {
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
    const tr = document.createElement('tr');
    const name  = document.createElement('td');
    const professor  = document.createElement('td');
    const days  = document.createElement('td');
    name.innerText = course.course_name;
    professor.innerText = course.professor;
    
    const weekdays2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let str1 = '';
      for(let i = 0; i < course.course_days.length; i++){
        if(course.course_days[i]){
         
          str1 += '  ' + weekdays2[i];
        }
      }
      days.innerHTML = str1;

    tr.appendChild(name);
    tr.appendChild(professor);
    tr.appendChild(days);

    document.getElementById('coursesTableBody').appendChild(tr);
  }
});