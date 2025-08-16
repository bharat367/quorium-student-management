import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import StudentsList from './components/StudentsList'
import AddStudent from './components/AddStudent'
function App() {
  const [students, setStudents] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        const transformedStudents = data.users.map(user => ({
          studentID: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          course: getRandomCourse(),
          status: getRandomStatus()
        }))
        setStudents(transformedStudents)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching students:', error)
        setLoading(false)
      }
    }
    fetchStudents()
  }, [])
  const getRandomCourse = () => {
    const courses = ['Mathematics', 'Physics', 'Computer Science', 'Biology', 'Chemistry']
    return courses[Math.floor(Math.random() * courses.length)]
  }
  const getRandomStatus = () => {
    const statuses = ['Active', 'Inactive', 'Graduated']
    return statuses[Math.floor(Math.random() * statuses.length)]
  }
  const addStudent = (newStudent) => {
    const studentWithID = {
      ...newStudent,
      studentID: Math.max(...students.map(s => s.studentID), 0) + 1
    }
    setStudents([...students, studentWithID])
  }
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-800">Quorium Consulting - Student Management</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded ${
                  activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`px-4 py-2 rounded ${
                  activeTab === 'students' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Students List
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`px-4 py-2 rounded ${
                  activeTab === 'add' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        {activeTab === 'dashboard' && <Dashboard students={students} />}
        {activeTab === 'students' && <StudentsList students={students} />}
        {activeTab === 'add' && <AddStudent onAddStudent={addStudent} />}
      </main>
    </div>
  )
}
export default App
