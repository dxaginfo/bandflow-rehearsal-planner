# BandFlow - Rehearsal Planner

A comprehensive web application for bands, orchestras, and music groups to efficiently schedule and manage rehearsals.

## Features

- **User Authentication and Account Management**
  - Secure user registration and login
  - Band/group profile creation and management
  - Role-based permissions (admin, band leader, member)

- **Rehearsal Scheduling**
  - Create single or recurring rehearsal events
  - Calendar view of all upcoming rehearsals
  - Location and resource management

- **Availability Tracking**
  - Member availability management
  - Response tracking for rehearsal invitations
  - Conflict detection and resolution

- **Smart Scheduling**
  - AI-powered optimal rehearsal time suggestions
  - Automated scheduling based on member availability

- **Notifications and Reminders**
  - Automated email/SMS/push notifications
  - Customizable notification preferences
  - Real-time updates for schedule changes

- **Attendance Tracking**
  - Digital attendance recording
  - Attendance history and analytics
  - Reporting tools for band leaders

- **Setlist and Resource Management**
  - Create and share rehearsal setlists
  - Song library with metadata (key, tempo, etc.)
  - Equipment and resource allocation

- **Calendar Integration**
  - Sync with external calendars (Google, iCal, Outlook)
  - Import/export functionality

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material-UI components
- FullCalendar.js for calendar view
- Chart.js for analytics visualization

### Backend
- Node.js with Express
- RESTful API architecture
- JWT authentication
- Socket.io for real-time updates

### Database
- PostgreSQL
- Redis for caching and session management

### DevOps
- Docker for containerization
- AWS for hosting
- GitHub Actions for CI/CD

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL
- Redis

### Installation

1. Clone the repository
   ```
   git clone https://github.com/dxaginfo/bandflow-rehearsal-planner.git
   cd bandflow-rehearsal-planner
   ```

2. Install dependencies
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   ```
   # Create .env file in the server directory
   cp server/.env.example server/.env
   # Edit .env with your database credentials and API keys
   ```

4. Set up the database
   ```
   # Run migrations
   cd server
   npm run migrate
   ```

5. Start the development servers
   ```
   # Start backend server
   cd server
   npm run dev

   # In a new terminal, start frontend server
   cd client
   npm start
   ```

6. Access the application
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
bandflow-rehearsal-planner/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   ├── src/                 # Source files
│   │   ├── assets/          # Images, fonts, etc.
│   │   ├── components/      # Reusable components
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Page components
│   │   ├── redux/           # Redux state management
│   │   ├── services/        # API services
│   │   ├── utils/           # Utility functions
│   │   ├── App.tsx          # Main App component
│   │   └── index.tsx        # Entry point
│   └── package.json         # Frontend dependencies
├── server/                  # Backend Node.js/Express application
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Request handlers
│   │   ├── db/              # Database setup and migrations
│   │   ├── middleware/      # Express middleware
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   ├── app.js           # Express app setup
│   │   └── server.js        # Server entry point
│   └── package.json         # Backend dependencies
├── docker-compose.yml       # Docker configuration
├── .github/                 # GitHub Actions workflows
└── README.md                # Project documentation
```

## Deployment

### Using Docker
```
docker-compose up -d
```

### Manual Deployment
1. Build the frontend
   ```
   cd client
   npm run build
   ```

2. Start the production server
   ```
   cd server
   npm run start
   ```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- [FullCalendar](https://fullcalendar.io/)
- [Material-UI](https://mui.com/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)