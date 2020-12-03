# Link to Heroku App

https://cs326-xi.herokuapp.com/login

# Title

Rendezvous

### Subtitle

Rendezvous

# Semester

Fall 2020

# Overview

The application provides a platform for users to enter data focused around university courses with additional data related to timezones and availability to attend study sessions. The user will be able to log in and enter the courses they are taking by providing a course name, professor, and the days the course takes place. The application displays the user's courses in a table for the user's convenience. Additionally, the user will be able to set and update their time availability throughout a week using a calendar-like table in the Settings page. A key aspect of this application is that it allows users to look at a pool of other users who are also using this platform and narrow down the amount of people by applying filters. The filters include the user's courses, professors, course days, and timezone. The application makes a user's email publicly available during the filtering process and a phone number is optional This enables users to find study partners or groups for their specified classes. Given the current state of online schooling, being able to find classmates and coordinate meeting times for study sessions or just exchange contact information can benefit the learning experience of the users of this platform. International students, or students who want to collaborate with students that live far away, will benefit greatly from filtering down to other users who are in the same timezone for convenience of real time communication. 

# Team Members

Olivia Brennan (oliviarb), JengYu Chou (jelchou), Janvi Tanniru (jtanniru)

# User Interface

Login Page

![login](../images/login_page.png)

Register Page

![register](../images/login_page.png)

Courses Page (user can add new courses, delete current courses, and view current courses)

![courses](../images/login_page.png)

Search Page (for filtering other users of the platform to find classmates to communicate with)

![search](../images/login_page.png)

Settings Page (user can add a timezone and update their weekly availability)

![settings](../images/login_page.png)

Availability (displays a given user's weekly availability table)

![availability template](../images/login_page.png)

# APIs

[ todo ]

# Database

[ todo ]

# URL Routes/Mapping

[ todo ]

# Authentication/Authorization

[ todo ]

# Division of Labor

### Olivia Brennan

- Initial layout of groups.html (deleted file)
- Review of all initial layout files
- HTML work: search.html settings.html,, availability.js
- JS work (front end): search.js, settings.js
- Server integration with settings.js and availability.js

### JengYu Chou

- Initial layout of homepage.html and courses.html
- HTML work: register.html, homepage.html, courses.html
- JS work (front end): register.js, homepage.js, courses.js
- Server integration with homepage.js, register.js, courses.js, search.js
- Aided availability.js front end

### Janvi

- Initial layout of search.html and settings.html
- Logo design
- Brunt of the server functionalities: server.js, database.js
- Server integration with homepage.js, register.js, courses.js, search.js
- Aided availability.js server integration

# Conclusion

[ todo ]
