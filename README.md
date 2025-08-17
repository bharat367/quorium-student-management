# Quorium Student Management System

A modern, responsive web application built with React and Vite for managing student information at Quorium Consulting.

## Application Screenshots

### Dashboard
![Dashboard View](./assets/screenshots/dashboard.png)
*Main dashboard showing total student count and welcome message*

### Add Student Form
![Add Student Form](./assets/screenshots/add-student.png)
*Form for adding new students with all necessary fields*

### Students List
![Students List](./assets/screenshots/students-list.png)
*Searchable and sortable list of all students with status indicators*

## Features

- **Dashboard Overview**: Get a quick glance at total student count and key metrics
- **Student Management**:
  - Add new students with details like name, email, and course
  - View all students in a sortable and searchable table
  - Track student status (Active/Inactive/Graduated)
- **Course Management**: Support for multiple courses including:
  - Mathematics
  - Physics
  - Computer Science
  - Biology
  - Chemistry

## Technology Stack

- **Frontend**: React.js 19.1
- **Build Tool**: Vite 7.1
- **Styling**: TailwindCSS 3.4
- **Development**:
  - ESLint for code quality (configured with React Hooks and Refresh plugins)
  - PostCSS for Tailwind processing and vendor prefixing
  - React type definitions from @types/react

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd quorium-student-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Features in Detail

### Dashboard
- Welcome message
- Total student count display

### Student Management
- **Add Student Form**:
  - Student name
  - Email address
  - Course selection
  - Status tracking (Active/Inactive/Graduated)
  
- **Student List**:
  - Search functionality across all fields
  - Student ID display
  - Name and contact information
  - Course enrollment status
  - Visual status indicators

## Styling

The application uses TailwindCSS for styling with a clean, modern interface featuring:
- Responsive design
- Custom color schemes
- Shadow effects
- Rounded corners
- Status-based color coding
