# Part 0: Project API Planning

API: 
* RESTful APIs

Data Flow:
- user object : firstName, lastName, id, email, phone, password, availability, timezone, courses
- course object: courseName, courseNumber, professor, sessionNumber, courseDays, courseTime, listOfUser 
- courses list:  course1, course2.

Endpoints:

 /register which allows for a new user to sign up

 /login which allows for a user to login
 
/course/new which allows for a course to be added to the list of course when a request is sent to this endpoint containing the courseName, courseNumber, professor, 
courseDays, courseTimes

/user/id/search/new?courseName='temp course'&courseTime='temp time'&(other filter) which outputs the list of people in the course specified by the current user filters

/user/id/courses/create?courseName='temp course'' which adds a given course to users list of courses.

/user/id/courses/update?courseName='temp course'&professor='temp prof'&(other info to be updated) which updates a given course(i.e. when the user changes class timings)

/user/id/courses/delete?courseName= ''which deletes a given course(i.e. when the user drops the class or moves on to a new semester)

