# FreeMentors

Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions.

This is the development build of Free Mentors

[![Build Status](https://travis-ci.org/StephenAraka/Free-Mentors.svg?branch=develop)](https://travis-ci.org/StephenAraka/Free-Mentors)

[![Coverage Status](https://coveralls.io/repos/github/StephenAraka/Free-Mentors/badge.svg?branch=develop)](https://coveralls.io/github/StephenAraka/Free-Mentors?branch=develop)


[View UI Demo](https://stephenaraka.github.io/Free-Mentors)


#### Frontend:
- HTML
- CSS
- Javascript
You can check out the front end User Interface [here](https://stephenaraka.github.io/Free-Mentors)

### Backend:
 - [ExpressJS](https://expressjs.com/)
 
 
 ### Testing:
 - [Mocha](https://mochajs.org/) [Chai](https://www.npmjs.com/package/chai)
 

### Table of API routes
|     URL     |     HTTP Method     |     Description     |
| ----------- | -------------------- | ------------------- |
|api/v1/auth/signup/ | POST | User sign up |
|api/v1/auth/signin | POST  | User sign in |
|api/v1/auth/admin/signin | POST | Admin sign in |
|api/v1/users | GET | Obtain a list of all users and their details |
|api/v1/mentors | GET | Obtain a list of all mentors and their details |
|api/v1/mentors/:id | GET | Obtain a specific mentor by specified ID |
|api/v1/user/:id | PATCH | Change status of a user to  mentor |
|api/v1/sessions| POST | Create a mentorship session |
|api/v1/sessions/:id/accept | PATCH | Accept a mentorship session request |
|api/v1/sessions/:id/reject | PATCH | Reject a mentorship session request |

### Prequesite for project
- Nodejs [environment](https://nodejs.org/en/)
- Text Editor [Microsoft Visual studio code](https://code.visualstudio.com/)
- Github bash [terminal](https://git-scm.com/downloads) 
- Postman API [development](https://www.getpostman.com/)

### Clone
- 1. Clone the repo. run command `git clone https://github.com/StephenAraka/Free-Mentors`

- Navigate into the folder that is cloned. run command `cd Free-Mentors`

### Installation of prerequisites
- Nodejs [environment](https://nodejs.org/en/)
- Postman API [development](https://www.getpostman.com/)

### Installing dependencies
 - To install the required dependencies, run the command `npm install`

### Start the app
 - To start the app run the command `npm start`
 App will start on your local host

### API Documentation
 - [Free Mentors Docs](https://mentors4free.herokuapp.com/api/v1/api-docs)

### Heroku page
 - [Free Mentors](https://mentors4free.herokuapp.com)

### Version
- `v1.0.0`
