import React from 'react'
import Homepage from './component/HomePage/Homepage'
import { Route , Routes ,  } from 'react-router-dom'
import Login from './component/Login/Login.jsx'
import Signup from './component/Signup/Signup'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './component/Dashboard/Dashboard'


function App() {
    return (
        <div>
               <AuthProvider>
                <Routes>
                    <Route path = "/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup"  element={<Signup />} />
                    <Route path="/dashboard"  element={<Dashboard />} />
                </Routes>
                </AuthProvider>

        </div>
    )
}

export default App
