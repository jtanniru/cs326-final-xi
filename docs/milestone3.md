# Database Implementation

courseInfo Table

| Column       | Data Type | Description                             |
|--------------|-----------|-----------------------------------------|
| course_name  | String    | The name of the course                  |
| professor    | String    | The name of the professor               |
| course_days  | Boolean[] | The days the course takes place         |
| email        | String    | The email of the user taking the course |

userInfo Table

| Column       | Data Type | Description                     |
|--------------|-----------|---------------------------------|
| email        | String    | The email of user               |
| name         | String    | The name of the user            |
| salt         | String    | The salt of the user password   |
| hash         | String    | The hash of the user password   |
| phone        | String    | The phone number of the counter |
| timezone     | String    | The timezone of the user        |
| availability | JSON      | The availability of the user    |

The courseInfo table contains rows such that each row is a single course for a user and contains the course's name, professor, days, and the user's email. The courseInfo table can be used to view all of the courses a user is taking, filter all users by one or more of the columns (for instance, it can be used to return all users that are taking a given course X). The userInfo table contains rows such that each row is a single user and contains the user's email, name, salt, hash (salt and hash for authentication), phone number, timezone, and availability. The userInfo table can be used to see if a user is already registered and for correct login information. 

# Breakdown of Labor
Janvi: database.js, server.js (including collab on calls in the js files)
Olivia: settings.html, settings.js + server, availability.html, availability.js
JengYu: homepage.html, register.html, courses.html, search.html, homepage.js, register.js, courses.js, search.js, availability.js linking
All: attended all working meetings/calls, majority of milestone3 was done in these working calls (when on call, for the most part one main person does the commits/pushes when a change is made, not sure how this affects overall commit numbers when they are analyzed)