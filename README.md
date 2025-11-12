Talent Directory App
A simple full-stack application for managing and viewing a list of talents using React, Redux, Node.js (Express), and MongoDB.

Features
View all talents

Add a new talent

Filter talents by skill

RESTful API with input validation and basic error handling

Project Structure
text
/talent-directory-app
  /backend        # Node.js + Express + MongoDB API
  /frontend       # React + Redux web app
Backend Setup (Node.js + Express + MongoDB)
Navigate to backend folder:

text
cd backend
Install dependencies:

text
npm install
Create a .env file:

Add the following, replacing <MongoDB_URI> with your credentials:

text
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
Start backend server:

text
node server.js
The backend will run on http://localhost:5000.

Frontend Setup (React + Redux)
Navigate to frontend folder:

text
cd frontend
Install dependencies:

text
npm install
Configure API base URL (if needed):

The frontend expects the backend API at http://localhost:5000/api/talents. If your backend runs elsewhere, update the API URL in your frontend code (talentsSlice.js or where axios/fetch is used).

Start frontend dev server:

text
npm start
The app will run at http://localhost:3000.

API Endpoints
POST /api/talents — Add a new talent

GET /api/talents — Get all talents

GET /api/talents?skill=React — Get talents filtered by skill

Testing APIs
You can use Postman or any REST client to test API endpoints.

Tech Stack
Frontend: React, Redux Toolkit, Axios, (Tailwind CSS or Bootstrap for styling)

Backend: Node.js, Express, Mongoose, MongoDB

Others: dotenv, cors
