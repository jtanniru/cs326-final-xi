# SETUP

# Updates from Milestone1 and Milestone2

The groups.html and groups.js files were removed from the project and register.html and register.js were added. When a user does exist in the database, they will not be able to log in until they create an account on the register page. The amount of data taken from the user in courses.html was decreased to Course Name, Professor, and Course Days. Components that were added include inputs for data in courses.html and a table to list a user's courses. Deletion options (drop down menu with a user's courses) was also added. The file search.html now filters by Course Name, Professor, Course Days, and Timezone. The people that meet the user's preferences are returned in a table in search.html. When a person is clicked on, the user can view that person's availability table. The file settings.html now does not have tabs and the availability table has the same functionality of tracking the user's availability throughout a week. Timezone and phone number (optional) can be updated in settings.html. There is a save and a clear button to save and clear the availability respectively.

# Necessary Files

homepage.html
register.html
courses.html
search.html
settings.html
availability.html (?)

register.js
courses.js
search.js
settings.js
availability.js (?)

# Steps to Build the Project

First create a homepage.html which will be the first page that the application opens on. This page acts as the login page and prompts the user for an email and a password. It has two buttons, a sign in button and a button that takes the user to a new page to register a new account. A register.html should be created such that register.html prompts the user for three inputs, an email, password, and a name. It will have a button that allows the user to create an account and redirects the user to the login page so that they can log in to the application with their new account login information. For both homepage.html and register.html, the pages will alert the user when at least one of the required inputs are empty. A homepage.js is not required. A register.js is required in order to save the user to the database. The user will be stored in an SQL table; for this project the table we created was called userInfo and it has columns email, name, salt, hash, phone, timezone, and availability. 