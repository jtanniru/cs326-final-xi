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
