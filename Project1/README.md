# Notes API Mini Project

This mini project is a simple RESTful API for managing notes, built with Node.js and Express.

## Features

- **Add a note:**  
  `POST /notes`  
  Add a new note by sending a JSON object in the request body.

- **Get all notes:**  
  `GET /notes`  
  Retrieve all notes.

- **Update a note's title:**  
  `PATCH /notes/:idx`  
  Update the title of a note at the specified index.

- **Delete a note:**  
  `DELETE /notes/:index`  
  Delete the note at the specified index.

## Example Endpoints

- `GET /`  
  Returns a welcome message.

- `POST /notes`  
  Request body example:
  ```json
  {
    "title": "Sample Note",
    "content": "This is a note."
  }
  ```

- `PATCH /notes/0`  
  Request body example:
  ```json
  {
    "title": "Updated Title"
  }
  ```

## Notes

- Notes are stored in-memory (not persisted).
- The server listens on port 3000.
- Ideal for learning basic CRUD operations and Express routing.

## How to Run

1. Install dependencies:
   ```
   npm install express
   ```
2. Start the server:
   ```
   node app.js
   ```

---