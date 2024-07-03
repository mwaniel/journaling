# journaling
Project Overview: Personal Journaling App Objective Create a mobile application and a backend service for personal jjournaling. Users should be able to write journal entries, categorize them, and view a summary of their entries.


# Documentation
Backend Setup:

Install dependencies: npm install in the journal-backend folder
Set up a PostgreSQL database and configure config/database.js   (databse name ,username password)
Run the server: nodemon server.js , npx nodemon server.js
Run using developer setup 

# API Documentation
  User Authentication:

POST /api/auth/register: Register a new user.
POST /api/auth/login: Login an existing user.


   Journal Entries:

POST /api/journals/entries: Create a new journal entry.
GET /api/journals/entries: Get all journal entries.
PUT /api/journals/entries/:id: Update a journal entry.
DELETE /api/journals/entries/:id: Delete a journal entry.
