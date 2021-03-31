## Required Installations
1. NodeJS   (from https://nodejs.org/en/download/) 
2. VS Code
## Steps to Run the application
1. Extract the provided code into a single folder. (after extraction, copy both folders to a single folder.)
2. open 2 terminals for the above extracted two folders. (**student-management**,  **student-server**)
3.  type `npm install`  command in both the terminals and wait for them to complete.
4. now, type `npm start`  in **student-server** terminal. and you should be able to see Connected to Database message on the terminal.
5. now, type `npm start` and press Enter button to start the frontend application.
6. allow it for few seconds to start the application. once application started, you should able to see a URL which is like http://localhost:3001/   and browser window will be opened by automatically. 
7. If browser not opened,  try to enter http://localhost:3001 in chrome address bar.
8. Now, the application must be up and running.

## Features Explanation
We are considering  4 features for the application as following.
#### Displaying the list of Students details saved on the database.
#### Registering new students (Inserting new students) (Clicking on Register at top left corner of the app header)
#### Updating the existing students details. (on double clicking student)
#### Deleting the selected student from the database.

## Code references for each feature
NodeJS server folder:   `student-server` folder
Frontend application folder:  `student-management` folder.

### 1. Displaying the list of Students details saved on the database.
####	`Server code`
Navigate to `Routes` > `students.js` file and look for `fetchStudentDetails`  function which is having implementation for  get student details.
which will take care of getting students details from database and sending back to frontend application..

#### `Frontend app code`:  (folder:   student-management)
* Navigate to `src`>`Students.jsx` file.  it is having implementation for `fetchStudents` method.  it will sends request to server and fetches the students.
* `renderStudents`  will displays the students list on the page.


### 2. Registering new students to the database.
####	`Server code`
Navigate to `Routes` > `students.js` file and look for  `insertNewStudentRecords` which is having implementation for inserting new student details to database and responding back to client.
which will take care of inserting new student details to database and sending success message back to frontend application.

#### `Frontend app code`:  (folder:   student-management)
* Navigate to `src`>`Register.jsx` file.  it is having implementation for registration form at the end of the file.  which is been mentioned in `return` value.
* `sendRegistration` method  will sends new student details to server and makes a POST method request.

### 3. Updating the existing students details. (on double clicking student).
####	`Server code`
Navigate to `Routes` > `students.js` file and look for `updateStudentDetails` function
which will take care of updating the student records new student details to database and sending success message back to frontend application.

#### `Frontend app code`:  (folder:   student-management)
* Navigate to `src`>`UpdateStudent.jsx` file. it is having implementation for update form  which is been mentioned in `return` value.
* `sendUpdateStudentDetails` method  will sends the updated details to server and makes a PUT method request.

### 4. Deleting students details.
####	`Server code`
Navigate to `Routes` > `students.js` file and look for `deleteStudentDetails` function
which will take care of deleting the student record based on the `id` provided from url parameter. details will be sent to database and then sending success message back to frontend application.

#### `Frontend app code`:  (folder:   student-management)
* Navigate to `src`>`Students.jsx` file. it is having implementation for Deleting the student.
* `deleteStudent` method  will called when trash icon is clicked and it will sends the Id of the student which needs to be deleted from database.



## Changing Database server details.
Database is configured in server code ie. `student-server` folder.
you need to open `routes` > `mysql.js` file.
this file will take care of maintaining the database connection with the database.
#### What if wanted to change the database server to my machine?
you need to install mysql in your machine and create a database called `management`
and try to execute  the SQL queries specified in `students.sql` file.
or once you open phpmyadmin application,  click on import button and select the students.sql file to import.
*  once database is ready, provide `host` as `localhost`,  `database` as `management`, and provide `user` as `root` and provide `password` if any.

by following above steps our application database is completely changed to own machine.
