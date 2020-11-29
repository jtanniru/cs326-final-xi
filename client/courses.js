'use strict';

function deleteTable() {
  const temp = document.getElementById("coursesTableBody");
  // for(let i = 0; i < temp.childNodes.length; i++){ 
  // //for(const i in temp) {
  //   // document.getElementById("coursesTable").deleteRow(1);
  //   temp.childNodes[i].remove();
  // }
  temp.remove();
  const newBody = document.createElement('tbody');
  newBody.setAttribute('id', 'coursesTableBody');
  const currentTable = document.getElementById('coursesTable');
  currentTable.appendChild(newBody);
}

function deleteSelector() {
  // const temp = document.getElementById("coursesDeleteSelection").getElementsByTagName("option");
  const temp = document.getElementById('coursesDeleteSelection');
  // for(let i = 0; i < temp.childNodes.length; i++){
  //   temp.childNodes[i].remove();
  // }
  temp.remove();
  const newSelector = document.createElement('select');
  newSelector.setAttribute('id', 'coursesDeleteSelection');
  const currentSelectHolderDiv = document.getElementById('selectHolder');
  currentSelectHolderDiv.appendChild(newSelector);
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

  deleteSelector();
  deleteTable();
  const responseOriginView = await fetch('/course/view');
  const responseOriginData = responseOriginView.ok ? await responseOriginView.json() : [];
  const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');

  for (const course of responseOriginData) {  // this does not delete first before repopulating the select menu and html table
    
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

// html table and delete selector menu, render on load of page


// click for course submission
// action for submit course button
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

    // add new course to selector tag
    deleteSelector();
    deleteTable();
    const responseView = await fetch('/course/view');
    const responseData = responseView.ok ? await responseView.json() : [];
    const coursesDeleteSelection = document.getElementById('coursesDeleteSelection');

    // this will add all current existing courses, not just the new one
    // can try deleting/clearing the whole selector tag contents (all options tags in selector)
    for (const course of responseData) {
      
      const newOption = document.createElement('option');
      newOption.innerHTML = course.course_name; // updated from newOption.value
      newOption.classList.add("text-dark", "bg-light");
      coursesDeleteSelection.appendChild(newOption);

      // update the html table with the new course -- will add all current existing courses to what is in html table already
      const tr = document.createElement('tr');
      const name  = document.createElement('td');
      const professor  = document.createElement('td');
      const days  = document.createElement('td');
      name.innerText = course.course_name;
      professor.innerText = course.professor;
      let str1 = '';
      const weekdays1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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

// click for delete course
const coursesDeleteButton = document.getElementById('coursesDelete');
coursesDeleteButton.addEventListener('click', async () => {
  // const deleteOption = document.getElementById("coursesDeleteSelection");
  const courseToDelete = document.getElementById('coursesDeleteSelection').value;
  

  // remove row from HTML table and delete selector options
  const responseDelete = await fetch('/course/view');
  const response = responseDelete.ok ? await responseDelete.json() : [];

  let index = 0;
  for (const course of response){
    if (course.course_name === courseToDelete) {
      document.getElementById("coursesTableBody").deleteRow(index); //wrong row (?) index+1
      const deleteOption = document.getElementById("coursesDeleteSelection");
      console.log("selected index: ", deleteOption.selectedIndex);
      deleteOption.remove(deleteOption.selectedIndex);
      // coursesToDelete.remove(coursesToDelete.selectedIndex);
      break;
    }
    index++;
  }

  console.log(courseToDelete);
  // go into the database, remove this course from the user's course listings
  const responseDelCourse = await fetch('/course/'+ courseToDelete, {
    method: 'DELETE'
  });

  if (!responseDelCourse.ok) {
    console.error("Error");
  }
  else{
    console.log("course delete");
  }

  deleteTable();  // clear html table before rerendering the whole thing

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
    let str1 = '';
    const weekdays2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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