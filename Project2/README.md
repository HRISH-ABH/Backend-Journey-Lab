# User Authentication API

This project provides a simple user authentication system using Node.js, Express, MongoDB (with Mongoose), and bcrypt for password hashing. It includes user registration and login routes, as well as basic validation.

## Features

- **User Registration**
  - Validates username, email, and password length
  - Hashes passwords before storing in the database
  - Stores user data in MongoDB

- **User Login**
  - Login page rendering (logic to be implemented)
  - Accepts email and password

- **Validation**
  - Uses `express-validator` for input validation

## API Endpoints

### Register

- **GET `/user/register`**
  - Renders the registration page

- **POST `/user/register`**
  - Registers a new user
  - Request body:
    ```json
    {
      "username": "yourname",
      "email": "your@email.com",
      "password": "yourpassword"
    }
    ```
  - Response: Created user object (with hashed password)

### Login

- **GET `/user/login`**
  - Renders the login page

- **POST `/user/login`**
  - Accepts email and password (logic to be implemented)

### Test

- **GET `/user/test`**
  - Returns a test message

## Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- bcrypt
- express-validator
- EJS (for rendering pages)

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Set up your `.env` file with your MongoDB URI:
   ```
   MONGO_URI=mongodb://127.0.0.1:27017/driveDb
   ```
3. Start your MongoDB server.
4. Start the application:
   ```
   node app.js
   ```
5. Visit `http://localhost:3000/user/register` or `http://localhost:3000/user/login` in your browser.

---

**Note:**  
The login POST logic is not yet implemented. You can extend it to check user credentials and handle sessions or JWT authentication as needed.