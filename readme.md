# Node.js Development Projects

## 📄 Project Description

This repository contains completed assignments from the Node.js course. The assignments are executed step-by-step in the form of separate branches for each task. The repository demonstrates skills in working with Node.js, asynchronous functions, the file system, module usage, and project management on GitHub.

## 📂 Repository Structure

- **hw02** - Task 2
- **hw03** - Task 3
- **hw04** - Task 4
- **hw05** - Task 5
- **hw06** - Task 6

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **Mongoose** - MongoDB object modeling tool
- **MongoDB Atlas** - Cloud database service for MongoDB
- **Joi** - Data validation library
- **JWT** - JSON Web Tokens for authentication
- **Multer** - Middleware for handling multipart/form-data, used for file uploads
- **Gravatar** - Globally Recognized Avatars
- **Jimp** - Image processing library
- **SendGrid** - Email delivery service
- **Postman** - API development environment
- **Eslint** - Pluggable JavaScript linter

## 📜 Commands

- `npm start` &mdash; start the server in production mode
- `npm run start:dev` &mdash;  start the server in development mode
- `npm run lint` &mdash; run code linting with eslint, should be executed before each PR and fix all linter errors
- `npm lint:fix` &mdash; run the linter check with automatic fixing of simple errors

## ✅ Completed Tasks

### 📝 Task 1

- Project initialization and dependency setup.
- Creation of a CLI utility for managing contacts using the `commander` package.
- Implementation of CRUD operations for working with contacts in the `contacts.json` file.

### 🌐 Task 2

- Creation of a REST API for working with the contact collection.
- Using Express to create the server and routing.
- Implementation of controllers to handle GET, POST, PUT, and DELETE requests.
- Data validation using the Joi package.
- Error handling and creating user-friendly messages.
- API testing using Postman.

### 💾 Task 3

- Transition to using MongoDB for data storage.
- Creation of a MongoDB Atlas account and cluster setup.
- Using MongoDB Compass to manage the database.
- Importing existing contacts into the database.
- Rewriting CRUD operations to work with MongoDB using Mongoose.
- Adding a new `favorite` field for contacts.
- Implementing a PATCH route to update the `favorite` status of a contact.

### 🔐 Task 4

- Implementation of user authentication and authorization using JWT.
- Creating a user model with `email`, `password`, `subscription`, and `token` fields.
- Registering users with password hashing.
- User login with token generation and storage.
- Protecting private routes with middleware to verify tokens.
- Implementing a route to get the current user.
- Implementing a route for user logout.
- Additional features: pagination, contact filtering, updating user subscription.

### 🖼️ Task 5

- Adding the ability to upload user avatars using Multer.
- Setting up static file serving with Express.
- Using gravatar to automatically generate avatars during user registration.
- Adding an `avatarURL` field to the user model to store the avatar link.
- Implementing a route to update the user's avatar.
- Storing uploaded files in a temporary folder and processing them with jimp.
- Moving processed files to the `public/avatars` folder with unique names.

### ✉️ Task 6

- Adding email verification for users after registration using the SendGrid service.
- Creating a SendGrid account and setting up an email sender.
- Generating and storing a verification token for the user.
- Implementing a route to verify the user's email.
- Sending a verification email with a link during user registration.
- Preventing login for users with unverified emails.
- Implementing a route for resending the verification email.
