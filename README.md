# Eduzone - Educational Platform

Eduzone is a comprehensive educational platform providing resources for various subjects including Python, Full Stack Development, and English Technical Communication. The platform features course materials, quizzes, progress tracking, and an admin dashboard.

## Features

- **User Authentication**: Secure login/logout using Auth0
- **Course Materials**: Access educational resources for multiple subjects
- **Interactive Quizzes**: Test your knowledge with timed quizzes
- **Progress Tracking**: Monitor your learning journey across different subjects
- **User Dashboard**: View all your progress and recent activities in one place
- **Search Functionality**: Easily find relevant courses and resources
- **Contact Form**: Get in touch with the Eduzone team
- **Admin Dashboard**: Manage user submissions (for administrators only)

## Technology Stack

- **Frontend**: React.js, Bootstrap 5
- **Backend**: Node.js, Express
- **Database**: MongoDB atlas(or file-based storage for the mock server)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd eduzone
   ```

2. Install frontend dependencies
   ```
   npm install
   ```

3. Install backend dependencies
   ```
   cd contact-form-backend
   npm install
   cd ..
   ```

### Configuration

1. Create a `.env` file in the `contact-form-backend` directory
   ```
   PORT=5000
   MONGODB_URI= atlas mongodb connection url
   CLIENT_URL=http://localhost:3000
   ```

### Running the Application

#### Frontend

1. Start the React development server
   ```
   npm start
   ```
   The frontend will be accessible at http://localhost:3000

#### Backend (with MongoDB)

1. Make sure you have MongoDB running locally or provide a valid connection string in the `.env` file
2. Start the backend server
   ```
   cd contact-form-backend
   npm run dev
   ```
   The backend will be accessible at http://localhost:5000

#### Backend (without MongoDB)

If you don't have MongoDB installed, you can use the mock server which uses file-based storage:

1. Start the mock server
   ```
   cd contact-form-backend
   npm run mock:dev
   ```
   The mock server will be accessible at http://localhost:5000

## Usage

### User Roles

1. **Guest Users**:
   - Browse the home page
   - View information about courses
   - Contact the Eduzone team
   - Sign up/login

2. **Authenticated Users**:
   - Access course materials
   - Take quizzes
   - Track progress
   - View personal dashboard

3. **Administrators**:
   - Access the admin dashboard
   - View contact form submissions

### Admin Access

To access the admin features, log in with an admin account. The default admin email is `admin@eduzone.com`.

## Project Structure

```
eduzone/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
├── contact-form-backend/
│   ├── server.jsx       # MongoDB backend server
│   ├── mock-server.js   # File-based backend server 
│   └── package.json     # Backend dependencies
├── package.json         # Frontend dependencies
└── README.md            # Project documentation
```

## Customization

### Adding New Courses

Create a new course page in the `src/pages` directory following the pattern of existing course pages like `Python.jsx`.

### Adding New Quizzes

Create a new quiz component in the `src/pages` directory following the pattern of `Quiz1.jsx`.

## Troubleshooting

### Backend Connection Issues

If you're having trouble connecting to the backend:

1. Make sure the backend server is running
2. Check if the port is correct (default: 5000)
3. Verify your CORS settings in both frontend and backend

### Authentication Issues

If authentication is not working: Verify the redirect URLs


## Acknowledgements

- React.js
- Bootstrap
- Express.js
- Node.js
- MongoDB atlas
