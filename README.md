## JOb API

This is a job api where a user can post job opportunities and a user can like a particular job as well. This is designed using Mongoose and Express.
Some of the features are protected and can only be accessed when a user is logged in.

### Routes of the API

#### User routes
##### 1) /api/user/register (POST) - to register, the user you need to provide name, email, mobile, age, password and type. The name should be atleast 3 characters long and type must be an enum from ["student", "fresher", "experienced", "recruiter"]
##### 2) /api/user/login (POST) - you need to enter the email and the password
##### 3) /api/user/logout (GET) - You need to be first logged in to be able to logout
##### 4) /api/user/update/password (POST) - You need to be first logged in to be able to update the password. Provide the new password in the req body

#### Job routes - All the routes are protected you must be first logged in to access it
#### 1) /api/job/post (POST) - Only a recruiter is allowed to post a job. The typer of the user should be recruiter
#### 2) /api/apply/:id (GET) - A user should be loged in and needs to provide the job id in the paramas

#### Like routes - All the routes are protected you must be first logged in to access it
#### 1) /api/likes/like (POST) - you need to provide the model and the id as query parameters. model should be either ["User", "Job"]. If model is 'Job', id: Should contain the ObjectID of the job to be liked. Else if model is 'User', id: Should contain the ObjectID of the user profile to be liked.
#### 2) /api/likes/getlikes (GET) -  you need to provide the model and the id as query parameters. model should be either ["User", "Job"]. If model is 'Job', id: Should contain the ObjectID of the job. Else if model is 'User', id: Should contain the ObjectID of the user profile.


