# SETUP

# Updates from Milestone1 and Milestone2

The groups.html and groups.js files were removed from the project and register.html and register.js were added. When a user does not exist in the database, they will not be able to log in until they create an account on the register page. The amount of data taken from the user in courses.html was decreased to Course Name, Professor, and Course Days. Components that were added include inputs for data in courses.html and a table to list a user's courses. Deletion options (drop down menu with a user's courses) was also added. The file search.html now filters by Course Name, Professor, Course Days, and Timezone. The people that meet the user's preferences are returned in a table in search.html. When a person is clicked on, the user can view that person's availability table. The file settings.html now does not have tabs and the availability table has the same functionality of tracking the user's availability throughout a week. Timezone and phone number (optional) can be updated in settings.html. There is a save and a clear button to save and clear the availability respectively.

# Source Files

**Client:**

Logo.png, 
RendezvousLogo.jpg

homepage.html,
register.html,
courses.html,
search.html,
settings.html,
availability.html

main.css

register.js,
courses.js,
search.js,
settings.js,
availability.js,
tempAvailability.js

**Server:**

database.js,
miniCrypt.js,
server.js

# Steps to Build the Project

First create a homepage.html which will be the first page that the application opens on. This page acts as the login page and prompts the user for an email and a password. It has two buttons, a sign in button and a button that takes the user to a new page to register a new account. A register.html should be created such that register.html prompts the user for three inputs, an email, password, and a name. It will have a button that allows the user to create an account and redirects the user to the login page so that they can log in to the application with their new account login information. For both homepage.html and register.html, the pages will alert the user when at least one of the required inputs are empty. A homepage.js is not required. A register.js is required in order to save the user to the database. The user will be stored in an SQL table; for this project the table we created was called userInfo and it has columns email, name, salt, hash, phone, timezone, and availability. 

A courses.html and courses.js will also be needed. When a user logs in correctly, the user is brought to courses.html which displays an option to add a course, delete a course, and shows a table containing the user's current courses. The event listeners for the buttons (adding and deleting a course) and select drop down menu will be contained in courses.js which will make calls to endpoints to access information stored in the database (courseInfo table). 

A search.html and search.js will also be needed. The search page (search.html) has a filter section on the left hand side. The filter options are by Course Name, Professor, Course Days, and Timezone. On the right hand side of the page will be a table containing all the people that match the user's selected filters. For instance, if a user is taking four courses, all four courses will show up in a dropdown in the filter section for the course names. This same format goes for the rest of the filter sections. If the user selects the dropdown for a course X, then the table will contain all the people with an account who are also taking the course X. Event listeners for the dropdowns and the code for accessing database table information to fill the table of people that match a user's preferences will be contained in search.js. 

A settings.html and settings.js are also needed. The settings page (settings.html) contains the availability table that has grids by the hour (24 hours) for a whole week. If the user is available on Monday from 3pm - 6pm, they can click on the corresponding hour cells in the availability table and save their changes. The table can also be cleared completely. Event listeners for when cells are clicked as well as when a user inputs information such as a phone number or timezone will be contained in settings.js. The settings.js file will also make calls to the database to store information in the userInfo table (phone number and timezone are columns in userInfo).

An availability.html and availability.js will also be needed. The availability.html will act as a template for a blank availability table and availability.js will fill in the table with the availabilities of a given user. This is meant to allow a user to look at the availabilities of the people that are returned in the table in search.html. 

A database.js, miniCrypt.js, and server.js file will also be needed. The miniCrypt.js file is for cryptography, to help with the authentication. The database.js file will connect to the database and contain the functions that make queries to the database tables (with use of pg-promise). The server.js file will set up what the endpoints do when they are called in other Javascript files as mentioned above with the help of the functions in database.js and also handles authentication (use of express and passport). 
