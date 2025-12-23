import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import StudentDashboard from './pages/Dashboard/DashboardComponent/StudentDashboard.jsx'
import Home from './pages/Home.jsx'

import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import VerifyEmail from './pages/Verifyemail.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <Login />,
        path: "/login"
      },
      {
        element: <Register />,
        path: "/register"
      },
      {
        element: <StudentDashboard />,
        path: "/student"
      },
      {
        element: <About />,
        path: "/about"
      },
      {
        element: <About />,
        path: "/about"
      },
      {
        element: <Services />,
        path: "/services"
      },
      {
        element: <Contact />,
        path: "/contact"
      },
      {
        element: <Dashboard />,
        path: "/dash"
      },
      {
        element: <VerifyEmail />,
        path: "/verifyemail/:token"
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>

)
